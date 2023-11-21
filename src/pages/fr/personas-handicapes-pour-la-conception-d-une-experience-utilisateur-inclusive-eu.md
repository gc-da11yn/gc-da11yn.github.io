---
title: Personas handicapés pour la conception d'une expérience utilisateur inclusive (EU)
layout: layouts/base.njk
description: Le cas d'inclure les handicaps dans les personas des utilisateurs, les types de technologies qu'ils utilisent et les échantillons de personas avec des handicaps.
subject:
  - accessibilityFundamentals
tags:
  - aboutDisabilities
---

<h2>Table des matières</h2>
<ul>
	<li><a href="#egalite-pour-tous">Créer l’égalité d’accès pour tous</a></li>
	<li><a href="#techniques-outils">Comprendre les techniques, les outils et la technologie d’adaptation</a>
		<ul>
			<li><a href="#amelioration-vision">Technologie d’amélioration de la vision</a></li>
			<li><a href="#substitution-vision">Technologie de substitution de la vision</a></li>
			<li><a href="#substitution-audio">Technologie d’amélioration et de substitution de l’audio</a></li>
			<li><a href="#amelioration-mobilite-dexterite">Technologie d’amélioration et de substitution de la mobilité et de la dextérité</a></li>
			<li><a href="#amelioration-cognitif-apprentissage">Technologie d’amélioration du style cognitif et d’apprentissage</a></li>
		</ul>
	</li>
	<li><a href="#elimination-des-obstacles">Élimination des obstacles à la facilité d’utilisation</a>
		<ul>
			<li><a href="#utilisateurs">Faire participer les utilisateurs aux projets</a></li>
		</ul>
	</li>
	<li><a href="#integrations-accessibilite">Intégration des besoins en matière d’accessibilité aux personas</a></li>
	<li><a href="#exemple-personas-handicapes">Exemple de personas généraux handicapés</a></li>
	<li><a href="#exemple-personas-handicapes-gc">Exemple de personas d’employés handicapées du gouvernement du Canada</a></li>
	<li><a href="#references">Références</a></li>
</ul>

<hr>

<p>Le présent document a pour but <em>d’aider</em> l’utilisateur à comprendre la manière de créer des personas handicapés. Des personas sont des personnages fictifs créés pour représenter divers types d’utilisateurs dont l’utilisation d’un site, d’une marque ou d’un produit serait unique. Souvent, les développeurs conçoivent des sites Web, des applications Web de bureau et mobiles à leurs propres goûts, ce qui peut éventuellement créer des obstacles pour certains utilisateurs. Il est important de planifier pour un groupe diversifié d’utilisateurs présentant un vaste éventail de capacités et d’incapacités, de niveaux techniques, de capacités fonctionnelles et de degrés de familiarité avec les processus ou les activités. Un aspect important de la conception inclusive consiste à inclure les personnes handicapées dès la première étape de la conception, puis à toutes les étapes du cycle de vie du développement logiciel. On contribuera ainsi à élever l’accessibilité et la convivialité du produit final et à mieux assurer l’inclusion de tous. Le présent document est un recueil de données provenant de diverses sources et visant à créer une vision cohérente de la conception inclusive.</p>

<h2 id="egalite-pour-tous">Créer l’égalité d’accès pour tous</h2>
<p>Le gouvernement du Canada s’est engagé à fournir de l’information au public sous une forme accessible; il s’est également engagé à créer un milieu de travail inclusif et sans obstacle qui inclut les personnes handicapées. Ces deux engagements nécessitent le respect de normes, d’exigences et de lignes directrices et le soutien d’une grande utilisation de la technologie, notamment les divers outils de la technologie adaptée comme les logiciels, le matériel et les dispositifs à l’intention des utilisateurs handicapés.</p>
<p>Les utilisateurs accèdent à l’information par divers moyens&nbsp;: les ordinateurs de bureau, les ordinateurs portatifs et, de plus en plus, les appareils mobiles comme les téléphones intelligents et les tablettes. Pour suivre le rythme de la demande et procurer une expérience satisfaisante à tous les utilisateurs, il faut examiner trois différents aspects des exigences&nbsp;:</p>

<ol>
	<li>Le besoin d’exigences relatives à la fonctionnalité et à l’inclusion au niveau de l’entreprise, notamment&nbsp;:
		<ol>
			<li>Les exigences fonctionnelles des utilisateurs finaux handicapés comprenant les techniques, outils et technologies d’adaptation suivants&nbsp;:
				<ol>
					<li>Amélioration de la vision;</li>
					<li>Substitution de la vision;</li>
					<li>Amélioration et substitution audio;</li>
					<li>Amélioration et substitution de la mobilité et de la dextérité;</li>
					<li>Amélioration du style cognitif et d’apprentissage.</li>
					<li>Les tâches précisées et les capacités des utilisateurs.</li>
				</ol>
			</li>
		</ol>
	</li>
	<li>La conception des applications qui constituent la solution et la façon dont elles se rattachent aux deux éléments suivants&nbsp;:
		<ol>
			<li>Les normes officielles du fabricant du système d’exploitation;</li>
			<li>Les normes des applications d’origine accessibles.</li>
		</ol>
	</li>
	<li>Les besoins des utilisateurs individuels en matière de technologie adaptée et de fonctionnalité intégrée.</li>
</ol>

<h2 id="techniques-outils">Comprendre les techniques, les outils et la technologie d’adaptation</h2>

<h3 id="amelioration-vision">Technologie d’amélioration de la vision</h3>

<p>La technologie d’amélioration de la vision est utilisée par un grand nombre de personnes qui souffrent d’une forme de déficience visuelle (communément appelée «&nbsp;basse vision&nbsp;»), mais qui peuvent encore se fier à la vision pour consommer l’information. Les exigences peuvent varier beaucoup pour ce qui est de la manière et du niveau de caractéristiques requis (c.-à-d. une personne ayant un champ visuel différent aura besoin de réglages qui sont différents de ceux dont a besoin une personne atteinte de glaucome ou d’une forme de daltonisme).</p>

<p>L’information est souvent présentée différemment, par exemple avec des couleurs très contrastantes, de gros caractères ou un agrandissement. Souvent, le système doit être utilisable avec une basse vision sans compter sur les fonctions audio. Une basse vision s’accompagne parfois d’une perte auditive, ce qui est particulièrement courant chez les personnes âgées. Les fonctions audio à elles seules en tant que stratégie d’accessibilité ne permettront pas de répondre aux besoins de ce groupe. Les programmes d’agrandissement d’écran (également appelés des programmes de gros caractères) permettent aux utilisateurs d’agrandir une partie de leurs écrans. Le moniteur d’ordinateur se transforme effectivement en une fenêtre d’affichage qui montre une partie seulement d’un affichage virtuel agrandi. L’utilisateur peut ensuite utiliser la souris ou les commandes du clavier pour déplacer cette fenêtre d’affichage afin de visualiser différentes zones de l’affichage virtuel.</p>

<h3 id="substitution-vision">Technologie de substitution de la vision</h3>
<p>La technologie de substitution de la vision est utilisée par les personnes souffrant d’une forme de déficience visuelle (communément appelée «&nbsp;cécité&nbsp;»), qui ne peuvent plus se fier à la vision, ou ne l’ont jamais fait, pour consommer l’information. Souvent, l’information est présentée par un moyen différent, comme le braille ou un moteur texte-voix. Windows de Microsoft, Windows Mobile, Linux, Blackberry OS, Apple Mac OS, iOS, Android et Chrome OS de Google (parmi d’autres) offrent tous des solutions aux utilisateurs aveugles qui utilisent les logiciels de lecture d’écran pour divers appareils. Les lecteurs d’écran tentent de reconnaître et d’interpréter ce qui est affiché à l’écran. L’information est ensuite représentée à l’utilisateur avec du texte-voix, du son, des icônes haptiques ou une sortie braille. Le lecteur d’écran suit ce qui se produit (p. ex. une ouverture de fenêtre) et les interventions qui sont effectuées sur un dispositif muni d’un clavier physique, d’un D-Pad, d’une boule de commande ou d’une manette de jeu. Dans le cas d’un appareil doté d’un écran tactile, il modifie la façon dont se comporte l’écran tactile et offre des méthodes d’interaction tactile. Il y a également la technologie d’exploration tactile qui permet à une personne aveugle d’explorer l’écran en le touchant, sans activer les éléments à l’écran. De plus, le lecteur d’écran peut fournir de la rétroaction au sujet des éléments de l’écran en émettant des alertes audio ou haptiques. Il fournit également du texte oral comme commandes et de l’information lorsqu’on y touche. Un ensemble de gestes supplémentaires permettent de se déplacer d’un élément à l’autre à l’écran et d’activer des fonctions précises du lecteur d’écran (p. ex. lire un bloc de texte).</p>

<h3 id="substitutions-audio">Technologie d’amélioration et de substitution de l’audio</h3>
<p>La technologie d’amélioration et de substitution de l’audio est utilisée par les personnes souffrant d’une forme de trouble auditif et par certains utilisateurs souffrant d’un trouble de la parole. Cette catégorie de technologie englobe divers besoins et exigences. Les solutions peuvent être aussi simples que la compatibilité avec un appareil auditif doté d’un capteur téléphonique, ou aussi complexes que l’accès à un téléimprimeur (TTY).</p>
<p>Il faut souvent que les systèmes d’information soient utilisables sans pouvoir les entendre. L’information communiquée par des fonctions audio seulement est inaccessible pour les personnes sourdes. De plus, il faut que les systèmes d’information soient utilisables par des personnes ayant une déficience auditive. Souvent, ces personnes ont également une déficience visuelle, surtout chez les personnes plus âgées. Il est donc important de permettre à ces personnes de se fier à l’audition résiduelle plutôt qu’à la vision (c.-à-d. les méthodes d’accès utilisées par des personnes sourdes).</p>
<p>Les personnes qui n’entendent pas les bips ou qui ne reconnaissent pas les mots prononcés pourraient avoir besoin d’un programme qui les sollicite autrement, notamment un clignotement à l’écran, ou bien l’affichage de messages prononcés sous forme de texte ou de signaux sonores traduits en signaux visuels.</p>

<h3 id="substitutions-mobilite-dexterite">Technologie d’amélioration et de substitution de la mobilité et de la dextérité</h3>
<p>La technologie de mobilité et de dextérité sert aux personnes ayant une déficience ou une limitation physique. Cette catégorie de technologie englobe divers besoins et exigences. Les solutions sont parfois aussi simples que la saisie par mode de substitution ou la reconnaissance de la voix, parfois aussi complexes que le balayage avec accès à un dispositif d’entrée. Dispositifs d’entrée (mobilité)&nbsp;: divers dispositifs d’entrée sont offerts sur le marché pour cliquer, glisser ou toucher de pair avec un dispositif pour déplacer le curseur. Les dispositifs d’entrée peuvent aussi servir pour communiquer avec un dispositif au moyen de systèmes divers de codage, notamment le code Morse, dont certaines personnes atteintes de graves déficiences physiques se servent pour entrer du texte.</p>
<p>Technologie de reconnaissance vocale permet à l’utilisateur de commander le dispositif et d’entrer du texte en parlant. La reconnaissance de la voie devient courante, mais son application dans l’industrie de la technologie adaptée a toujours été importante. Elle permet d’utiliser des dispositifs mains libres. En plus d’être utilisables par des personnes dont les besoins relatifs à la dextérité ou la mobilité sont différents, les systèmes doivent souvent être utilisables sans égard à la gravité de la déficience physique. Pour une personne atteinte d’une déficience physique, par exemple une limite de la force, de la portée ou de la manipulation, des tremblements ou un manque de sensation, la technologie peut offrir des modes de fonctionnement qui ne font pas appel au contrôle de la motricité fine ou à des actions simultanées, qui sont possibles si la personne a une force et une portée limitées et qui ne dépendent pas d’un délai de réponse.</p>

<h3 id="amelioration-cognitif-apprentissage">Technologie d’amélioration du style cognitif et d’apprentissage</h3>
<p>Les troubles cognitifs et d’apprentissage sont des problèmes de traitement neurologiques. Ces problèmes de traitement peuvent interférer avec les compétences d’apprentissage telles que la lecture, l’écriture et / ou les mathématiques. Ils peuvent également interférer avec les compétences de niveau supérieur telles que l’organisation, la planification du temps, le raisonnement abstrait, la mémoire à long ou à court terme et l’attention. Cette catégorie de technologie englobe divers besoins et exigences.</p>
<p>Les solutions sont parfois aussi simples que des calendriers ou des systèmes de gestion des tâches, parfois aussi complexes que la lecture de documents multimodaux.</p>
<p>La reconnaissance de la voix aide les personnes atteintes de dyslexie ou de dysgraphie qui pourraient avoir de la difficulté à s’exprimer.</p>
<p>De plus, certains logiciels conçus pour faciliter le processus d’entrée de texte dans un ordinateur par l’emploi d’outils tels que le vérificateur d’orthographe phonétique et le thésaurus avancé sont d’usage courant. D’habitude, une combinaison de systèmes d’agrandissement et de lecture d’écran et de dispositifs de saisie par mode de substitution sert à donner à ces personnes l’accès à un ordinateur.</p>
<p>Les déficiences cognitives prennent de nombreuses formes, notamment le syndrome de Down, les troubles de la mémoire à court et à long termes et les différences de perception. Une conception appropriée peut accroître la fonctionnalité d’un ordinateur pour les personnes ayant des déficiences cognitives légères.</p>
<p>Le syndrome de stress visuel (commotion cérébrale) est une affection neurologique qui interfère avec la lecture, l’attention, la coordination, la santé générale et le comportement, et peut se produire malgré une vision normale. Le stress visuel se produit lorsque des stimuli tels que les modèles, le contraste, la lumière et la couleur affectent le cortex visuel, altérant la fonction cérébrale et entraînant des symptômes d’inconfort physique et de distorsions perceptuelles. Des solutions telles que des filtres colorés ont été montrées pour réduire les effets de ces stimuli, calmant le stress et rétablissant le fonctionnement du cerveau.</p>
<p>Certaines déficiences neurologiques rendent la parole difficile et les systèmes qui parlent à la place de l’utilisateur peuvent aider les personnes atteintes d’un trouble de la parole. La plupart des progiciels de ce genre exploitent un synthétiseur de parole.</p>

<h2 id="elimination-des-obstacles">Élimination des obstacles à la facilité d’utilisation</h2>

<p>Les obstacles courants auxquels les utilisateurs se heurtent en naviguant dans Internet et en accédant à l’information au moyen de la technologie peuvent se regrouper dans les catégories suivantes&nbsp;:</p>
<ol>
	<li>Obstacles critiques&nbsp;: ils empêchent une personne d’utiliser un site ou une caractéristique avec succès;</li>
	<li>Obstacles graves&nbsp;: ils causent la frustration, ralentissent l’utilisateur ou nécessitent une solution de rechange;</li>
	<li>Obstacles modérés&nbsp;: ils sont contrariants et frustrants, mais n’empêchent pas la personne d’utiliser le site;</li>
	<li>Obstacles mineurs&nbsp;: des bruits qui ne causent peut-être pas de problème pour la personne, mais qui nuisent à la crédibilité.</li>
</ol>
<p>Il ne s’agit pas tout simplement de listes de vérification; dans l’inclusion, il s’agit de personnes. Le respect des Règles pour l’accessibilité des contenus Web (WCAG&nbsp;2.0) permettra de rendre le contenu Web plus accessible, mais la question importante est la suivante&nbsp;: le contenu sera-t-il utilisable?</p>

<h3 id="utilisateurs">Faire participer les utilisateurs aux projets</h3>
<p>L’accessibilité est une question à aborder au début du cycle de vie du projet. Dès le lancement d’un projet, elle doit faire partie des processus de conception centrée sur l’utilisateur (CCU). L’une des méthodes de CCU consiste en l’utilisation de personas. La création de personas diverses permettra aux concepteurs de logiciels de comprendre les besoins en matière d’accessibilité et de mettre en place des solutions plus inclusives.</p>

<h2 id="integrations-accessibilite">Intégration des besoins en matière d’accessibilité aux personas</h2>
<p>La création de personas handicapés nécessite une attention particulière compte tenu d’une longue liste de facteurs clés à prendre en considération&nbsp;:</p>
<ol>
	<li>Se concentrer sur la réalité et le parcours des utilisateurs, notamment&nbsp;: les aptitudes, l’attitude et les capacités.</li>
	<li>Se concentrer sur les capacités&nbsp;: il est plus important de connaître les capacités d’une personne ainsi que les tâches qu’une personne a besoin d’accomplir et est en mesure d’accomplir&nbsp;:
		<ol>
			<li>Vision;</li>
			<li>Ouïe;</li>
			<li>Mobilité;</li>
			<li>Dextérité;</li>
			<li>Cognition.</li>
		</ol>
	</li>
	<li>Opter pour une vaste gamme de technologies adaptées, dont les suivantes&nbsp;:
		<ol>
			<li>lecteurs d’écran</li>
			<li>souris commandées par la tête ou autre dispositif de pointage</li>
			<li>loupes d’écran</li>
			<li>claviers divers; dispositifs d’entrée et pédales de navigation du clavier</li>
			<li>sous-titres</li>
			<li>synthétiseurs de parole.</li>
		</ol>
	</li>
	<li>Concevoir, élaborer et mettre à l’essai en
		fonction de divers appareils&nbsp;:
		<ol>
			<li>ordinateurs de bureau</li>
			<li>ordinateurs portatifs</li>
			<li>tablettes</li>
			<li>téléphones intelligents</li>
		</ol>
	</li>
	<li>Répondre à des styles différents d’interaction&nbsp;:
		<ol>
			<li>braille</li>
			<li>pédales et dispositifs d’entrée</li>
			<li>loupes</li>
			<li>pavés parlants</li>
			<li>voix hors champ</li>
			<li>manettes de jeu</li>
			<li>fonctions audio</li>
			<li>claviers à contraste élevé</li>
			<li>sous-titres à l’écran</li>
			<li>étiquettes en langage clair et simple</li>
			<li>dispositifs d’entrée vocale</li>
		</ol>
	</li>
	<li>Se concentrer sur les caractéristiques et les préférences&nbsp;:
		<ol>
			<li>présentation flexible</li>
			<li>options quant aux médias</li>
			<li>dispositifs divers</li>
			<li>méthodes d’entrée diverses</li>
			<li>langues multiples</li>
			<li>utilisateurs distraits (certaines personnes ont des <em>troubles</em> de concentration; un système de navigation intuitive peut aider un utilisateur distrait à ne pas se perdre dans un système, une application ou un site Web.)</li>
		</ol>
	</li>
</ol>

<h2 id="exemple-personas-handicapes">Exemple de personas généraux handicapés</h2>

<ol>
	<li>Thomas&nbsp;: Il a 18&nbsp;ans, vit avec sa famille et fréquente l’école secondaire. Il utilise les ordinateurs à l’école, un ordinateur portable chez lui et un téléphone mobile de base offrant le service d’envoi de messages courts (SMS). Il aime les sites Web constants et qui lui sont familiers.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration du style cognitif et d’apprentissage.</li>
			<li>Handicap&nbsp;: Il est atteint d’un trouble du spectre de l’autisme.</li>
			<li>Capacités&nbsp;: Il fait agrandir le texte et utilise un programme qui cache tout sauf le texte pour ne pas être distrait.</li>
			<li>Aptitudes&nbsp;: Il utilise bien l’ordinateur pour jouer des jeux, mais il apprend difficilement de nouveaux sites.</li>
			<li>Attitude&nbsp;: Il préfère des sites familiers et une routine établie.</li>
			<li>Technologie adaptée&nbsp;: Il utilise le réglage des paramètres du texte et un clavier bureautique.</li>
		</ol>
	</li>
	<li>Émilie&nbsp;: Elle a 24&nbsp;ans, est diplômée de l’école secondaire et travaille sur un diplôme collégial. Elle vit dans un petit centre de vie autonome et travaille à temps partiel dans un centre communautaire local. Elle veut être entièrement autonome.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration et substitution de la mobilité et de la dextérité.</li>
			<li>Handicap&nbsp;: Elle est atteinte de paralysie cérébrale; elle a de la difficulté à se servir de ses mains et à parler clairement.</li>
			<li>Capacités&nbsp;: Elle utilise un fauteuil roulant motorisé.</li>
			<li>Aptitudes&nbsp;: Elle utilise bien l’ordinateur à l’aide du bon dispositif d’entrée et elle trouve facilement des mots de recherche efficaces.</li>
			<li>Attitude&nbsp;: Elle veut tout faire elle-même et parfois, elle est impatiente.</li>
			<li>Technologie adaptée&nbsp;: Elle utilise un outil de communication augmentatif et alternatif (CAA) avec un générateur de parole, un iPad et un fauteuil roulant motorisé.</li>
		</ol>
	</li>
	<li>Francis&nbsp;: Ancien combattant, il a 30&nbsp;ans et il vit avec sa copine. Il utilise un ordinateur portable chez lui et des ordinateurs dans les centres communautaires et les bibliothèques. Il a un iPhone. Il travaille à temps partiel comme réceptionniste au centre communautaire. Il a de la difficulté à se concentrer, à se souvenir de choses, à gérer le stress, à réfléchir et à écrire ou parler clairement. Il a de la difficulté à organiser et à gérer son temps, ce qui a tendance à lui causer des problèmes dans des situations sociales et professionnelles.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration du style cognitif et d’apprentissage</li>
			<li>Handicap&nbsp;: Il est atteint du trouble de stress post-traumatique (TSPT) et de déficiences cognitives.</li>
			<li>Capacités&nbsp;: Il lit et écrit lentement; il a besoin de plus de temps pour traiter l’information.</li>
			<li>Aptitudes&nbsp;: Auparavant, il utilisait couramment des ordinateurs, mais il trouve maintenant qu’il est plus difficile de réaliser des tâches professionnelles.</li>
			<li>Attitude&nbsp;: Il utilise couramment des ordinateurs, mais il est susceptible à des crises épileptiques et des pertes de conscience et il trouve certains sites trop stimulants.</li>
			<li>Technologie adaptée&nbsp;: Il utilise des caractéristiques intelligentes et de traitement telles que des agents logiciels, des rappels et des vérificateurs d’orthographe de pair avec des adaptations aux systèmes d’entrée ou de sortie. Autres&nbsp;: logiciel de gestion du temps; générateur de bruit blanc; logiciel de remue-méninges; logiciel pour noter rapidement des idées (Quick Note); logiciel de saisie semi-automatique.</li>
		</ol>
	</li>
	<li>Jacob&nbsp;: Il a 32&nbsp;ans. Il a un diplôme collégial, suit des cours de formation juridique et partage un appartement avec un ami. Parajuriste, il examine des cas et rédige des résumés de cas. Il utilise un ordinateur portable, un afficheur Braille et un iPhone. La bonne technologie lui permet de faire tout ce qu’il veut.
		<ol>
			<li>Catégorie de handicap&nbsp;: Substitution de la vision.</li>
			<li>Handicap&nbsp;: Il est aveugle de naissance.</li>
			<li>Capacités&nbsp;: Il a une perception lumineuse.</li>
			<li>Aptitudes&nbsp;: Il est un utilisateur habile de la technologie.</li>
			<li>Attitude&nbsp;: C’est un natif numérique parmi les premiers utilisateurs de nouvelles technologies qui persiste jusqu’à ce qu’il réussisse.</li>
			<li>Technologie adaptée&nbsp;: Il utilise un lecteur d’écran, un logiciel de prise de notes audio et un afficheur Braille.</li>
		</ol>
	</li>
	<li>Lea&nbsp;: Elle a 35&nbsp;ans et a fait une maîtrise. Elle est rédactrice pour une publication spécialisée et travaille de chez elle. Personne ne comprend qu’il s’agit bel et bien d’un handicap.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration de la mobilité et de la dextérité.</li>
			<li>Handicap&nbsp;: Elle souffre de fibromyalgie.</li>
			<li>Capacités&nbsp;: Elle souffre de fatigue en raison de la fibromyalgie. Elle utilise une boule de commande et un clavier spécialisé.</li>
			<li>Aptitudes&nbsp;: C’est une utilisatrice moyenne.</li>
			<li>Attitude&nbsp;: Elle voudrait que les gens comprennent jusqu’à quel point il est difficile parfois pour elle de composer avec sa journée.</li>
			<li>Technologie adaptée&nbsp;: Elle utilise un clavier réglable, un clavier bureautique et le logiciel de reconnaissance vocale <em>Naturally Speaking</em> de Dragon.</li>
		</ol>
	</li>
	<li>Stéphane&nbsp;: Il a 38&nbsp;ans et a fréquenté une école des beaux-arts. Il travaille comme graphiste dans une petite agence de publicité. Il utilise un iPad, un iPhone, un ordinateur portable MacBook Pro et il a un bon ordinateur au travail. Son unique handicap, c’est que ce n’est pas tout le monde qui communique en langage gestuel.
		<ol>
			<li>Catégorie de handicap&nbsp;: Substitution audio.</li>
			<li>Handicap&nbsp;: Il est sourd de naissance.</li>
			<li>Capacités&nbsp;: Sa langue maternelle est le langage gestuel américain (ASL). Il sait parler et lire sur les lèvres. Il utilise le service d’envoi de messages courts (SMS), la messagerie instantanée (IM), le logiciel Skype et le vidéoclavardage.</li>
			<li>Aptitudes&nbsp;: Il est habile avec des outils graphiques et préfère le visuel au texte. Il a une mauvaise orthographe, ce qui rend les recherches plus difficiles.</li>
			<li>Attitude&nbsp;: L’accessibilité et en particulier, le manque de sous-titre, peut l’irriter.</li>
			<li>Technologie adaptée&nbsp;: Il utilise le langage gestuel, le service CART (transcription en temps réel des communications), les sous-titres et le vidéoclavardage.</li>
		</ol>
	</li>
	<li>Nancy&nbsp;: Elle a 45&nbsp;ans et depuis quatre ans, elle exploite des technologies informatiques qui lui donnent un accès autonome à la lecture et à des communications écrites.
		<ol>
			<li>Catégorie de handicap&nbsp;: Substitution audio et de la vision.</li>
			<li>Handicap&nbsp;: Elle est sourde et aveugle et elle ne parle pas. Ses compétences en langage gestuel (ASL) sont limitées.</li>
			<li>Capacités&nbsp;: Elle sait lire le braille abrégé et elle utilise un téléphone muni d’un TTY Braille.</li>
			<li>Attitude&nbsp;: Elle utilise le langage gestuel pour communiquer avec d’autres à l’aide d’un interprète ou d’un facilitateur.</li>
			<li>Attitude&nbsp;: Elle peut devenir facilement frustrée quand les services dont elle a besoin pour communiquer ne sont pas fournis ou n’existent pas.</li>
			<li>Technologie adaptée&nbsp;: Elle utilise un lecteur d’écran, un afficheur Braille, un téléphone muni d’un TTY Braille et un logiciel TTY.</li>
		</ol>
	</li>
	<li>Vishnu&nbsp;: Il a 48&nbsp;ans et il est diplômé en ingénierie. Il travaille sur des projets internationaux pour une entreprise de logiciels médicaux. Né en Inde, il a terminé ses études supérieures en Malaisie et il vit à Singapour. Il utilise la haute technologie au travail, deux téléphones mobiles et un ordinateur portatif personnel. Il veut être au même niveau que tout le monde.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration de la vision.</li>
			<li>Handicap&nbsp;: Il a une basse vision.</li>
			<li>Capacités&nbsp;: Il parle trois langues&nbsp;: le gujarati, le hindi, l’anglais et un peu le mandarin. Il utilise le réglage du contraste pour bien voir l’écran.</li>
			<li>Aptitudes&nbsp;: C’est un utilisateur expert d’outils techniques. Il trouve frustrantes les recherches d’une langue à une autre.</li>
			<li>Attitude&nbsp;: Il se voit comme un citoyen du monde et veux pouvoir utiliser n’importe quel site.</li>
			<li>Technologie adaptée&nbsp;: Il utilise le réglage du contraste, l’agrandissement de l’écran et des feuilles de style personnalisées.</li>
		</ol>
	</li>
	<li>Maria&nbsp;: Elle a 49&nbsp;ans. Elle est titulaire d’un diplôme de collège communautaire et d’un certificat en soins de santé. Elle est mariée et ses enfants sont adultes. Elle parle l’espagnol et l’anglais. Elle est agente de santé communautaire. Elle utilise un téléphone intelligent et l’ordinateur personnel chez elle sert principalement à son mari pour son travail. Elle est contente avec ce qu’elle a pourvu qu’elle puisse trouver ce qu’elle cherche.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration du style cognitif et d’apprentissage.</li>
			<li>Handicap&nbsp;: Elle est dyslexique.</li>
			<li>Capacités&nbsp;: Elle préfère les sites en espagnol quand elle peut les trouver. Elle a besoin d’information et de directives clairement écrites.</li>
			<li>Aptitudes&nbsp;: Elle a l’esprit aventurier, mais elle n’est pas très autonome, son mari et sa fille posent des signets pour elle.</li>
			<li>Attitude&nbsp;: Elle pense que c’est merveilleux d’avoir ses sites Web avec elle en tout temps.</li>
			<li>Technologie adaptée&nbsp;: Elle utilise le logiciel Skype et des sites de traduction en ligne.</li>
		</ol>
	</li>
	<li>1Marie&nbsp;: Elle a 52&nbsp;ans et elle est titulaire d’un diplôme collégial. Elle vit avec sa sœur. Elle a travaillé dans un cabinet de dentiste comme réceptionniste pendant 20&nbsp;ans. Depuis cinq ans, elle reçoit des prestations d’invalidité.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration de la vision; amélioration de la mobilité et de la dextérité.</li>
			<li>Handicap&nbsp;: Elle est atteinte de sclérose en plaques chronique progressive et de déficiences motrice et sensorielle.</li>
			<li>Capacités&nbsp;: Elle utilise un fauteuil roulant motorisé qu’elle commande au moyen d’une manette de jeu pour se déplacer. Sa vision est très limitée et fluctuante.</li>
			<li>Aptitudes&nbsp;: Avant, elle utilisait couramment les ordinateurs, mais maintenant, ses capacités physiques sont extrêmement limitées.</li>
			<li>Attitude&nbsp;: Elle aime utiliser les ordinateurs, mais elle s’irrite quand elle ne peut accéder à certaines caractéristiques.</li>
			<li>Technologie adaptée&nbsp;: Elle peut utiliser un ordinateur à l’aide d’un clavier programmable. Les touches d’un pouce carré présentent de gros caractères noirs sur un fond blanc pour l’aider à taper. Les jours où sa vision est au point le plus faible, elle dépend de la mémoire motrice pour accéder à son clavier. Les jours où ça va mieux, elle lit parfois en faisant agrandir le texte de 8 fois ou plus.</li>
		</ol>
	</li>
	<li>Carole&nbsp;: Elle a 74&nbsp;ans et son mari est décédé il y a un an. Elle habite un appartement près de l’une de ses filles et de certains de ses petits-enfants (âgés de 6 à 16&nbsp;ans). Elle est à la retraite après avoir travaillé comme aide-comptable dans une entreprise de construction. Elle utilise un ancien ordinateur chez elle et un téléphone mobile de base. Elle dit que ses petits-enfants la traînent dans le monde de la technologie.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration audio et de la vision.</li>
			<li>Handicap&nbsp;: Elle montre les premiers signes de dégénérescence maculaire, souffre d’arthrite légère et porte une prothèse auditive.</li>
			<li>Capacités&nbsp;: Son ordinateur n’est muni d’aucune technologie adaptée.</li>
			<li>Aptitudes&nbsp;: Elle utilisait des ordinateurs quand elle travaillait comme aide-comptable, mais maintenant ses petits-enfants s’occupent de la mise à jour de son ancien ordinateur personnel.</li>
			<li>Attitude&nbsp;: Elle a de la volonté, mais n’a pas l’esprit aventurier.</li>
			<li>Technologie adaptée&nbsp;: Elle utilise l’agrandissement du texte, sans toucher beaucoup à d’autres réglages.</li>
		</ol>
	</li>
</ol>

<h2 id="exemple-personas-handicapes-gc">Exemple de personas d’employés handicapées du gouvernement du Canada</h2>
<ol>
	<li>Jean-Marc&nbsp;: Il a 33&nbsp;ans et il est diplômé d’une école des beaux-arts. Il travaille comme graphiste à la Direction générale des communications d’Affaires autochtones et du Nord Canada (AAND). Il utilise couramment les produits Apple (iPad, iPhone, MacBook Pro). Il est d’avis que son unique handicap est le fait que ce n’est pas tout le monde qui communique en langage gestuel.
		<ol>
			<li>Catégorie de handicap&nbsp;: Substitution audio.</li>
			<li>Handicap&nbsp;: Il est sourd de naissance.</li>
			<li>Capacités&nbsp;: Sa langue maternelle est le langage gestuel américain (ASL). Il sait parler et lire sur les lèvres. Il utilise le service d’envoi de messages courts (SMS), la messagerie instantanée (IM), le logiciel Skype et le vidéoclavardage.</li>
			<li>Aptitudes&nbsp;: Il est habile avec des outils graphiques et des logiciels, très cultivé en informatique et il préfère le visuel au texte. Il a une mauvaise orthographe et sa grammaire anglaise laisse à désirer, ce qui rend difficile la recherche de soutien sur le Web.</li>
			<li>Attitude&nbsp;: Il a tendance à s’irriter facilement au sujet de l’accessibilité, notamment le manque de sous-titre dans les vidéos ou les tutoriels.</li>
			<li>Technologie adaptée&nbsp;: Il utilise le langage gestuel, le service CART (transcription en temps réel des communications), les sous-titres et le vidéoclavardage.</li>
		</ol>
	</li>
	<li>Abdul&nbsp;: C’est un ingénieur de structures âgé de 51&nbsp;ans ayant une basse vision. Il est titulaire d’un baccalauréat spécialisé en génie. Il travaille à Affaires mondiales Canada sur des projets internationaux axés sur l’aide aux pays ravagés par la guerre aux fins de la reconstruction de leurs infrastructures. Il est constamment en déplacement et il est sur appel presque 24&nbsp;heures sur 24, 7&nbsp;jours sur 7. Il utilise deux téléphones mobiles, une tablette et un ordinateur portatif de travail ainsi qu’un ordinateur portatif personnel. Malgré sa basse vision, il s’efforce d’être au même niveau que tout le monde.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration de la vision.</li>
			<li>Handicap&nbsp;: Il a une basse vision.</li>
			<li>Capacités&nbsp;: Il parle trois langues&nbsp;: le gujarati, le hindi, l’anglais et un peu le mandarin. C’est un utilisateur très habile d’ordinateurs qui utilise le réglage du contraste pour bien voir l’écran.</li>
			<li>Aptitudes&nbsp;: C’est un utilisateur expert d’outils techniques. Il a tendance à devenir frustré lors de ses recherches d’une langue à une autre et il trouve que certains appareils de l’étranger manquent de réglages d’adaptation.</li>
			<li>Attitude&nbsp;: Il se considère comme un citoyen du monde. Il souhaite pouvoir utiliser n’importe quel site lorsqu’il passe des heures innombrables à faire des recherches, peu importe la langue ou le fait que la configuration des réglages de son ordinateur ou de son appareil mobile est personnalisée.</li>
			<li>Technologie adaptée&nbsp;: Il utilise le réglage du contraste, l’agrandissement de l’écran et des feuilles de style personnalisées.</li>
		</ol>
	</li>
	<li>Yvette&nbsp;: Elle a 35&nbsp;ans et elle est traductrice. Elle a fait une maîtrise en langue française et elle travaille comme traductrice pour le Bureau de la traduction à Services publics et Approvisionnement Canada. Elle travaille de chez elle et peut passer des heures à la fois à relire, à réviser et à traduire du contenu de tous les ministères du gouvernement du Canada. Ce qui la dérange le plus, c’est qu’elle a l’impression que personne ne comprend vraiment ce qu’elle vit au quotidien sur le plan physique et qu’elle a véritablement un handicap.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration de la mobilité et de la dextérité.</li>
			<li>Handicap&nbsp;: Elle souffre de fibromyalgie.</li>
			<li>Capacités&nbsp;: Elle souffre de fatigue en raison de la fibromyalgie et d’anxiété extrême lorsque sa charge de travail augmente soudainement. Souvent, elle a des crampes dans les mains et elles se figent. Elle utilise une boule de commande et un clavier spécialisé pour effectuer des tâches quotidiennes.</li>
			<li>Aptitudes&nbsp;: C’est une utilisatrice moyenne d’ordinateurs ayant des compétences avancées en Microsoft Office.</li>
			<li>Attitude&nbsp;: Elle voudrait que les gens comprennent jusqu’à quel point il est difficile parfois pour elle de composer avec sa journée et de faire les projets qui lui sont affectés dans les délais prévus.</li>
			<li>Technologie adaptée&nbsp;: Elle utilise un clavier réglable, un clavier bureautique, le logiciel de reconnaissance vocale <em>Naturally Speaking</em> de Dragon et des touches programmées au préalable.</li>
		</ol>
	</li>
	<li>Denis&nbsp;: Il a 21&nbsp;ans et il vit avec sa famille. Il a terminé ses études secondaires en suivant un programme spécialisé pour personnes autistes ou atteintes du trouble déficitaire de l’attention avec hyperactivité (TDAH). Il a acquis ses connaissances informatiques générales à l’école. Chez lui, il a un ordinateur portable standard et un téléphone mobile de base avec service d’envoi de messages courts (SMS). Il a été embauché comme préposé aux services de courrier à Services publics et Approvisionnement Canada (SPAC). Denis travaille mieux dans un environnement où la routine et les processus sont constants et familiers.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration du style cognitif et d’apprentissage.</li>
			<li>Handicap&nbsp;: Il est atteint d’un trouble du spectre de l’autisme.</li>
			<li>Capacités&nbsp;: Il fait agrandir le texte sur ses appareils (un ordinateur portatif et un téléphone cellulaire standard) et utilise un programme qui cache tout sauf le texte pour ne pas être distrait.</li>
			<li>Aptitudes&nbsp;: Il utilise bien l’ordinateur pour jouer des jeux, mais il apprend difficilement de nouveaux sites ou logiciels.</li>
			<li>Attitude&nbsp;: Il préfère les sites Web qui lui sont familiers et il travaille mieux quand la routine est établie.</li>
			<li>Technologie adaptée&nbsp;: Il utilise le réglage des paramètres du texte et un clavier bureautique.</li>
		</ol>
	</li>
	<li>Georges&nbsp;: Il a 47&nbsp;ans et a fait une maîtrise en langues étrangères. Il travaille comme traducteur à Affaires mondiales Canada et vit seul. Georges a un ordinateur portable et un iPhone qu’il utilise au quotidien à des fins professionnelles et personnelles. Il ne sait pas lire le braille. Il lui faut donc un lecteur de documents pour la majorité de l’information qu’il reçoit depuis qu’il a perdu la vue. Georges a un chien-guide et il utilise une canne blanche quand il navigue des lieux inconnus.
		<ol>
			<li>Catégorie de handicap&nbsp;: Substitution de la vision.</li>
			<li>Handicap&nbsp;: Il a perdu la vue à l’âge de 38&nbsp;ans par suite d’autres problèmes médicaux.</li>
			<li>Capacités&nbsp;: Il a une perception lumineuse résiduelle.</li>
			<li>Aptitudes&nbsp;: Auparavant personne voyante, c’est un utilisateur habile de la technologie.</li>
			<li>Attitude&nbsp;: Il est très ouvert à l’apprentissage de nouvelles technologies et de nouveaux outils. Il apprend à utiliser des logiciels spécialisés pour lire du matériel électronique.</li>
			<li>Technologie adaptée&nbsp;: Il utilise un lecteur d’écran et un logiciel de prise de notes audio.</li>
		</ol>
	</li>
	<li>Benoît&nbsp;: Il a 27&nbsp;ans. Il est technicien marin dans la Marine royale canadienne et en mer pendant des périodes de six mois à la fois au minimum.
		<ol>
			<li>Catégorie de handicap&nbsp;: Amélioration audio.</li>
			<li>Handicap&nbsp;: Il a perdu l’ouïe de l’oreille gauche et 65&nbsp;% de l’ouïe de l’oreille droite par suite d’un accident survenu en mer.</li>
			<li>Capacités&nbsp;: Il est physiquement apte à l’exception d’une perte auditive grave et, à quelques rares occasions, de légers troubles d’équilibre.</li>
			<li>Aptitudes&nbsp;: Il n’a pas encore 30&nbsp;ans et il a l’esprit ouvert. Il est donc ouvert à toute technologie qui pourrait faire en sorte que sa perte de l’ouïe ait moins d’incidence.</li>
			<li>Technologie adaptée&nbsp;: Il porte une prothèse auditive dotée d’un capteur téléphonique.</li>
		</ol>
	</li>
</ol>

<p>Il faut garder à l’esprit la diversité des gens. Soyez attentifs à ne pas tenir pour acquis que tous les utilisateurs y compris les utilisateurs handicapés utilisent votre produit de la même manière. Les gens se servent de méthodes d’interaction, de stratégies d’adaptation et de configurations de la technologie adaptée différentes. Les expériences, les
	attentes et les préférences des gens sont différentes. Vos personas handicapés nécessitent des recherches réelles, et les personas ne remplacent pas les tests utilisateurs par de vraies personnes handicapées.</p>

<h2>Références</h2>

<ol>
	<li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=12541" rel="external">Politique sur l'obligation de prendre des mesures d'adaptation pour les personnes handicapées dans la fonction publique fédérale</a></li>
	<li><a href="https://fr.wikipedia.org/wiki/Persona_(ergonomie)" rel="external">Persona (ergonomie)</a></li>
	<li><a href="http://www.uiaccess.com/accessucd/personas.html" rel="external">Accessibility in User-Centered Design: Personas</a> (anglais seulement)</li>
	<li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27088" rel="external">Norme sur l’optimisation des sites Web et des applications pour appareils mobiles</a></li>
</ol>
