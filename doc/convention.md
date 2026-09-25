# Convention de nommage des variables JavaScript

## Règles générales
- Utiliser des noms clairs et descriptifs.
- Préférer le camelCase pour les variables.
- Éviter les abréviations ambiguës.
- Les noms doivent refléter le rôle de la variable.
- Utiliser des noms en anglais.

## Exemples
- `userName`
- `totalPrice`
- `isActive`
- `fetchUserData`
- `maxRetries`

## À éviter
- `x`, `y`, `temp`, `data1`
- Noms trop longs ou peu lisibles
- Noms contenant des caractères spéciaux ou des espaces

## Bonnes pratiques
- Commencer par un nom générique puis préciser si nécessaire.
- Pour les booléens, utiliser des préfixes comme `is`, `has`, `can`, `should`.
- Pour les tableaux, utiliser un nom pluriel ou un nom explicite.
- Pour les fonctions, utiliser un verbe ou une action claire.

## Modèle à remplir
- `variableName`
- `booleanFlag`
- `arrayItems`
- `objectConfig`
- `resultValue`

## Tableau des variables pour tout le projet avec sa définition

pour la database : `books` contient
    "id": int,
    "userId": int,
    "title": "string",
    "categorie": "string",
    "numberOfPages": int,
    "extract": "path string",
    "summary": "string",
    "writerName": "string",
    "writerSurname": "string",
    "editorName": "string",
    "releaseYear": int,
    "coverImage": "path string"

pour la database : `users` contient
    "id": int,
    "pseudo": "string",
    "entryDate": "yyyy-dd-mm"

pour la database : `ratings` contient
      "id": int,
      "userId": int,
      "bookId": int,
      "comment": "string",
      "rating": int