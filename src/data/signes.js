const signs = [
  {
    ordre: 3,
    nom: "Cochon",
    image: "./images/pig.png",
    description:
      'Chevaleresque (ce qui est le comble pour un cochon), galant, serviable, scrupuleux à l\'excès, le cochon brandit toujours la bannière de la pureté. Vous pouvez lui faire confiance, il ne vous trahira pas et ne cherchera jamais à vous tromper. Il est naïf, confiant, sans défense. Bref, on pourrait dire que le cochon est "poire"…',
    annees: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
  },
  {
    ordre: 6,
    nom: "Tigre",
    image: "./images/tiger.png",
    description:
      "Considérés comme courageux et puissants mais cruels et terrifiants, les tigres symbolisent, à la fois, le pouvoir et la solitude. Autrefois, les gens comparaient, souvent, les empereurs et les haut dignitaires à cet animal.",
    annees: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
  },
  {
    ordre: 9,
    nom: "Serpent",
    image: "./images/snake.png",
    description:
      "Personnalité Intelligent, avisé... Dans la culture chinoise, le serpent se révèle l'animal le plus énigmatique parmi les douze animaux zodiacaux. Les personnes nées dans une année du serpent sont réputées pour leur perspicacité. D’une nature secrète et prudente, les serpents possèdent une certaine inclinaison à agir suivant leur propre jugement. Refusant tout échec, leur entêtement leur permet d’atteindre les plus hauts sommets.",
    annees: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
  },
  {
    ordre: 5,
    nom: "Buffle",
    image: "./images/cow.png",
    description:
      "Les buffles sont connus pour leur diligence, leur fiabilité, leur force et leur détermination. De nature honnête, les buffles sont fortement patriotes, ont des idéaux et des ambitions de vie, et attachent de l'importance à la famille et au travail.Cela reflète des caractéristiques conservatrices traditionnelles. Les femmes buffles sont traditionnelles et fidèles, et attachent une grande importance à l'éducation de leurs enfants.",
    annees: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
  },
  {
    ordre: 0,
    nom: "Singe",
    image: "./images/monkey.png",
    description:
      "Intelligent, digne, optimiste, romantique, sociable, esprit vif, confiant, agile, motivateur, curieux.",
    annees: [],
  },
  {
    ordre: 2,
    nom: "Chien",
    image: "./images/dog.png",
    description:
      "Honnête et anxieux, le natif du Chien est en état d'alerte permanent. Savoir où sont ses proches, ce qu'ils font et s'ils vont bien lui est tout simplement vital. En 2021, ce signe aux aguets ne faillira pas à la règle et restera sur le qui-vive.",
    annees: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
  },
  {
    ordre: 7,
    nom: "Lapin",
    image: "./images/rabbit.png",
    description:
      "Bien équilibré, il sait garder pieds sur terre, et même quand il échoue, il saura bien tomber sur ses pieds aussi. Heureux ! C’est bien la caractéristique la plus adéquate à un lapin chinois. Il est habile et astucieux. Très méfiant, prudent il est très réfléchi et ne se précipite jamais dans la prise d’une décision. Grand conservateur, il aime son confort et le calme. Il éloigne tout ce qui a tendance à perturber sa tranquillité ou sécurité.Le natif est également un raffiné, il a le don de bien se mettre en valeur et d’attirer son entourage par sa discussion sympathique. Ayant une ambition très modérée, il est pudique et honnête. ",
    annees: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
  },
  {
    ordre: 10,
    nom: "Cheval",
    image: "./images/horse.png",
    description:
      "La plupart de ceux qui ont un signe astrologique chinois du Cheval ont de belles personnalités. Ils ont un cœur chaleureux, droit et sont facile à vivre. Par conséquent, ils ont généralement beaucoup d’amis autour d’eux. L’indépendance et l’endurance les rendent plus puissants ce qui fait qu’ils n’abandonnent pas facilement lorsqu’ils sont en difficulté. Une attitude positive conduit à un chemin plus lumineux.",
    annees: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
  },
  {
    ordre: 11,
    nom: "Chèvre",
    image: "./images/goat.png",
    description:
      "Tendres, polies, intelligents et bienveillants. Ils ont une sensibilité particulière à l'art et à la beauté et un goût particulier pour la tranquillité. Ils sont sages, doux et compatissants et peuvent faire face aux affaires avec prudence.",
    annees: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
  },
  {
    ordre: 8,
    nom: "Dragon",
    image: "./images/dragon.png",
    description:
      "Le dragon symbolise le pouvoir, la noblesse, l'honneur, la chance et le succès. Il représente un être surnaturel et talentueux, ayant atteint la perfection jamais égalée.",
    annees: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
  },
  {
    ordre: 4,
    nom: "Rat",
    image: "./images/rat.png",
    description:
      "Ambitieux, intelligent, persuasif, sociable, charmant, charismatique, perspicace, travailleur, méticuleux, tenace, artistique, éloquent",
    annees: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
  },
  {
    ordre: 1,
    nom: "Coq",
    image: "./images/chicken.png",
    description:
      "Actifs, amusants, ils ont du succès en société, bavards, francs, ouverts, honnêtes et loyaux. Observateurs, travailleurs acharnés, plein de ressources, courageux, talentueux, les coqs sont très sûrs d'eux.",
    annees: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
  },
];

export default signs;
