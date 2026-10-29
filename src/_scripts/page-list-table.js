/**
 * <page-list-tags>: renders a comma-separated list as tags inside gcds-table cells.
 * gcds-table sets the "tags" property (or attribute, if not yet defined) from the row data.
 */
if (!customElements.get("page-list-tags")) {
	customElements.define(
		"page-list-tags",
		class extends HTMLElement {
			static get observedAttributes() {
				return ["tags"];
			}
			set tags(value) {
				const variant = this.getAttribute("variant") || "tag";
				this.replaceChildren(
					...String(value || "")
						.split(",")
						.map((t) => t.trim())
						.filter(Boolean)
						.map((t) => {
							const span = document.createElement("span");
							span.className = `dev-tag dev-tag--${variant} d-inline-block px-100 bs-lg font-bold`;
							span.textContent = t;
							return span;
						})
				);
			}
			attributeChangedCallback(name, oldValue, value) {
				this.tags = value;
			}
		}
	);
}

/**
 * Page list table: applies the "Visible columns" checkboxes (columns and landing/content pages) to gcds-table.
 * gcds-table 1.6.0 doesn't re-render when columns or data change, so the table is rebuilt.
 */
(function () {
	let table = document.getElementById("page-list-table");
	if (!table) return;

	const allColumns = JSON.parse(table.getAttribute("columns"));
	const allRows = JSON.parse(table.getAttribute("data"));
	const baseAttributes = Array.from(table.attributes).filter(
		(attr) => !["columns", "data", "class"].includes(attr.name)
	);
	const slotted = Array.from(table.children).map((el) => el.cloneNode(true));

	const columnChoice = document.getElementById("page-list-table-columns");

	function asArray(value) {
		if (Array.isArray(value)) return value;
		if (typeof value === "string" && value.trim().startsWith("[")) {
			try {
				return JSON.parse(value);
			} catch (e) {
				return [];
			}
		}
		return value ? [value] : [];
	}

	// Each option is its own gcds-checkboxes, so collect the checked values from the group.
	function checked(group) {
		return Array.from(group.querySelectorAll("gcds-checkboxes")).flatMap((el) => asArray(el.value));
	}

	function apply() {
		const fields = checked(columnChoice);

		// Title always stays so each row is identifiable.
		const columns = allColumns.filter((c) => c.field === "title" || fields.includes(c.field));
		const rows = allRows.filter((r) => fields.includes(r.pageType));

		const next = document.createElement("gcds-table");
		baseAttributes.forEach((attr) => next.setAttribute(attr.name, attr.value));
		next.setAttribute("columns", JSON.stringify(columns));
		next.setAttribute("data", JSON.stringify(rows));
		slotted.forEach((el) => next.appendChild(el.cloneNode(true)));

		table.replaceWith(next);
		table = next;
	}

	columnChoice.addEventListener("gcdsChange", apply);
})();
