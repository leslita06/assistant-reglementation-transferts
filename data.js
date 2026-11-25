// Réponses rédigées à partir des textes officiels relus le 25/11/2026.
const SRC = {
  rfe: {
    nom: "Règlement n° 06/2024/CM/UEMOA du 20 décembre 2024 relatif aux relations financières extérieures des États membres de l'UEMOA",
    court: "Règlement n° 06/2024/CM/UEMOA",
    url: "https://www.cb-umoa.org/sites/default/files/2025-08/Regl%C3%A8ment%20relatif%20aux%20Relations%20Financi%C3%A8res%20Ext%C3%A9rieures.pdf",
    hote: "cb-umoa.org"
  },
  i01: {
    nom: "Instruction BCEAO n° 01/07/2025/RFE du 7 juillet 2025 relative à l'exécution des règlements à destination ou en provenance de l'étranger ou avec des non-résidents (en vigueur le 1er août 2025)",
    court: "Instruction n° 01/07/2025/RFE",
    url: "https://www.cb-umoa.org/sites/default/files/2025-08/Instruction%20n%C2%B0%2001%2007%202025%20RFE%20relative%20%C3%A0%20l%27ex%C3%A9cution%20des%20r%C3%A8glements%20%C3%A0%20destination%20ou%20en%20provenance%20de%20l%27%C3%A9tranger%20ou%20avec%20des%20non-r%C3%A9sidents.pdf",
    hote: "cb-umoa.org"
  },
  sa: {
    nom: "Instruction BCEAO n° 013-11-2015 du 10 novembre 2015 relative aux modalités d'exercice de l'activité de transfert rapide d'argent en qualité de sous-agent au sein de l'UMOA",
    court: "Instruction n° 013-11-2015",
    url: "https://www.bceao.int/sites/default/files/2017-11/instruction_no_013-11-2015_relative_aux_modalites_d_exercice_de_l_activite_de_transfert_rapide_d_argent_en_qualite_de_sous-agent.pdf",
    hote: "bceao.int"
  },
  eme: {
    nom: "Instruction BCEAO n° 008-05-2015 du 21 mai 2015 régissant les conditions et modalités d'exercice des activités des émetteurs de monnaie électronique dans l'UMOA",
    court: "Instruction n° 008-05-2015",
    url: "https://www.bceao.int/sites/default/files/2017-11/instruction_no008_05_2015_intranet.pdf",
    hote: "bceao.int"
  },
  i020: {
    nom: "Instruction BCEAO n° 020 du 8 octobre 2026 portant modification de l'Instruction n° 008-05-2015 (plafonds de monnaie électronique, en vigueur le 2 novembre 2026)",
    court: "Instruction n° 020 du 8 octobre 2026",
    url: "https://www.bceao.int/sites/default/files/2026-10/Instruction_plafonds_EME.pdf",
    hote: "bceao.int"
  },
  circ: {
    nom: "Circulaire n° 002-2020/CB/C du 18 septembre 2020 de la Commission bancaire de l'UMOA relative au traitement des réclamations des clients des établissements assujettis",
    court: "Circulaire n° 002-2020/CB/C",
    url: "https://www.bceao.int/sites/default/files/2020-10/Circulaire%20N%C2%B0%20002-2020-CB-C%20-Traitement_R%C3%A9clamations_Clients_Etablissements_Assujettis_Contr%C3%B4le_CB-UMOA.pdf",
    hote: "bceao.int"
  }
};

const QA = [
  {
    id: "qui",
    q: "Qui a le droit de verser à un client un transfert reçu de l'étranger ?",
    mots: ["qui", "verser", "payer", "droit", "autorise", "autorisé", "banque", "poste", "etranger", "étranger", "recevoir", "intermediaire", "intermédiaire", "habilite", "habilité"],
    r: [
      "Les transferts entre un pays de l'UEMOA et un pays hors de l'Union passent obligatoirement par la <b>BCEAO</b>, la <b>Poste</b>, un <b>intermédiaire agréé</b> (une banque agréée) ou un agréé de change manuel, chacun dans ses attributions.",
      "Une personne ou une société peut verser des transferts rapides <b>pour le compte d'une banque agréée</b>, sous sa responsabilité, si elle a signé une convention avec elle : c'est le <b>sous-agent</b>. Une microfinance autorisée peut aussi être mandant, mais ses sous-agents restent limités aux pays de l'UMOA.",
      "Un <b>établissement de monnaie électronique</b> peut recevoir des fonds venus d'un pays hors UMOA, dans sa relation avec une banque agréée. Il ne peut pas émettre de paiements vers l'étranger.",
      "Dans tous les cas, les devises reçues de l'étranger sont <b>encaissées en totalité auprès d'une banque agréée</b>."
    ],
    refs: [
      ["rfe", "art. 4 : intermédiaires chargés des opérations"],
      ["rfe", "art. 26 : sous-agents, monnaie électronique"],
      ["rfe", "art. 27 : encaissement des devises reçues"],
      ["sa", "art. 1er et 4 : mandant et sous-agent"]
    ]
  },
  {
    id: "sousagent",
    q: "Un commerçant veut devenir sous-agent de transfert rapide : que lui faut-il ?",
    mots: ["sous-agent", "sous agent", "commercant", "commerçant", "devenir", "guichet", "mandat", "contrat", "agent", "ouvrir", "exclusivite", "exclusivité", "affichage"],
    r: [
      "Un <b>contrat signé avec son mandant</b> (banque agréée ou microfinance autorisée), qui liste les opérations permises et les responsabilités de chacun. Ce contrat <b>ne peut pas contenir de clause d'exclusivité</b>.",
      "Il peut <b>envoyer</b> les fonds reçus des clients et <b>remettre</b> les fonds reçus aux bénéficiaires. Il n'a pas le droit de collecter des dépôts ni de faire d'autre opération de banque.",
      "Il remet à chaque client un <b>bordereau</b> (date, montant, taux de change appliqué le cas échéant, nom du mandant…), affiche le <b>logo de son mandant</b> sur son enseigne et ses <b>tarifs</b> au guichet.",
      "Le mandant reste responsable de lui, déclare la liste de ses sous-agents chaque année et peut être contrôlé avec lui par la Commission bancaire, la BCEAO et le ministère des Finances."
    ],
    refs: [
      ["sa", "art. 3 : contrat, pas d'exclusivité"],
      ["sa", "art. 4 : opérations autorisées"],
      ["sa", "art. 5 et 6 : bordereau, logo, tarifs"],
      ["sa", "art. 9 et 10 : responsabilité et contrôle"]
    ]
  },
  {
    id: "portefeuille",
    q: "Un transfert international peut-il être versé directement sur un portefeuille mobile ?",
    mots: ["portefeuille", "wallet", "mobile", "monnaie electronique", "monnaie électronique", "mobile money", "compte mobile", "international", "crediter", "créditer", "distributeur"],
    r: [
      "<b>Oui en réception</b> : un établissement de monnaie électronique peut recevoir des fonds venus d'un pays hors UMOA, dans le cadre de sa relation avec une banque agréée, qui veille au respect des règles de change.",
      "<b>Non en émission</b> : il n'est pas habilité à émettre des paiements vers l'étranger.",
      "Il doit encaisser la <b>totalité des devises reçues</b> auprès d'une banque agréée.",
      "Le versement reste soumis aux <b>plafonds du portefeuille</b> (voir la question sur les plafonds). Ses distributeurs peuvent assurer le chargement et le retrait d'espèces, sous sa responsabilité."
    ],
    refs: [
      ["rfe", "art. 26, 3° : réception oui, émission non"],
      ["rfe", "art. 27 : encaissement des devises"],
      ["eme", "art. 17 : recours aux distributeurs"]
    ]
  },
  {
    id: "plafonds",
    q: "Quels plafonds de portefeuille mobile peuvent bloquer un versement ?",
    mots: ["plafond", "plafonds", "limite", "maximum", "bloque", "bloqué", "rejet", "solde", "rechargement", "millions", "montant"],
    r: [
      "Depuis le <b>2 novembre 2026</b> : <b>4 millions de francs CFA</b> au plus d'avoirs pour un même client identifié chez un même émetteur. Si le client a plusieurs portefeuilles chez le même émetteur, les soldes s'additionnent.",
      "<b>15 millions de francs CFA</b> au plus de rechargements cumulés par client et par mois, chez un même émetteur.",
      "Un versement qui ferait dépasser l'un de ces plafonds bloque, sauf <b>autorisation préalable de la BCEAO</b>, demandée par l'émetteur avec les motifs, la durée et le montant.",
      "Ces plafonds ne s'appliquent ni aux distributeurs ni aux commerçants qui acceptent la monnaie électronique, dans leur activité professionnelle."
    ],
    refs: [
      ["i020", "art. 1er, article 31 nouveau : plafonds"],
      ["i020", "art. 2 : entrée en vigueur le 2 novembre 2026"]
    ]
  },
  {
    id: "reclamation",
    q: "Un client conteste un transfert : en combien de temps faut-il lui répondre ?",
    mots: ["reclamation", "réclamation", "plainte", "conteste", "contestation", "repondre", "répondre", "reponse", "réponse", "delai", "délai", "recepisse", "récépissé"],
    r: [
      "<b>Un mois au plus</b>, à compter de la réception de la réclamation.",
      "Au dépôt, l'établissement remet au client un <b>récépissé</b> : sa date vaut date de réception.",
      "Le traitement de la réclamation est <b>gratuit</b> pour le client.",
      "La règle s'applique aux banques, aux microfinances contrôlées par la Commission bancaire et aux établissements de monnaie électronique."
    ],
    refs: [
      ["circ", "art. 2 : établissements concernés"],
      ["circ", "art. 6 : récépissé"],
      ["circ", "art. 7 : réponse sous un mois"],
      ["circ", "art. 8 : gratuité"]
    ]
  },
  {
    id: "declaration",
    q: "Que faut-il déclarer à la BCEAO sur les transferts, et quand ?",
    mots: ["declarer", "déclarer", "declaration", "déclaration", "compte rendu", "reporting", "bceao", "mensuel", "mois", "rapport", "statistique", "liste"],
    r: [
      "<b>Chaque mois, sous 20 jours</b>, la banque ou la microfinance mandante transmet à la BCEAO les transferts rapides faits par ses sous-agents : montants, destinations, origines, motifs, frais et commissions.",
      "<b>Chaque année, sous 30 jours</b> après la fin de l'année, elle notifie la <b>liste de ses sous-agents</b> au ministère des Finances, à la Commission bancaire et à la BCEAO, avec le modèle de contrat.",
      "<b>Pour chaque transfert reçu de l'étranger</b>, la banque agréée rend compte au service des finances extérieures du ministère et à la BCEAO, sur l'attestation de cession de devises.",
      "Un établissement de monnaie électronique envoie à la BCEAO l'<b>encours du mois</b> sous 15 jours, et un <b>rapport d'activité trimestriel</b> sous 15 jours."
    ],
    refs: [
      ["sa", "art. 8 : information mensuelle"],
      ["sa", "art. 7 : notifications annuelles"],
      ["i01", "art. 10 : compte rendu des fonds reçus"],
      ["rfe", "art. 24 : comptes rendus"],
      ["eme", "art. 36 : informations aux autorités"]
    ]
  }
];
