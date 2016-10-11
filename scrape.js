(function () {

  var cards, tokens, other, factions, collectionArray;
  cards = [];
  tokens = [];
  other = [];
  factions = ["Lyonar Kingdoms", "Songhai Empire", "Vetruvian Imperium",
"Abyssian Host", "Magmar Aspects", "Vanar Kindred", "Neutral"];
  // First we nudge the collection object into a simpler form
  collectionArray = GameDataManager.instance.cardsCollection.models.map(model => model.attributes);
  // Then we trim off unplayable factions and prismatic cards
  collectionArray = collectionArray.filter(card => factions.indexOf(card.factionName) !== -1 && !card.isPrismatic);
  collectionArray.forEach((card) => {
    var details, resource;
    details = {
      name: card.name,
      atk: card.atk,
      hp: card.hp,
      manaCost: card.manaCost,
      factionName: card.factionName,
      id: card.id,
      baseCardId: card.baseCardId,
    };
    resource = card.card._private.baseAnimResource;
    details.spriteURL = resource ? RSX[resource.idle].img : null;

    // Tokens are hidden in the collection, but they are not the only things that are hidden.
    // Various effects in the game are stored as hidden cards and we want to avoid these.
    if (card.rarityName == "Token") {
      tokens.push(details);
    } else if (!card.isHiddenInCollection) {
      cards.push(details);
    } else {
      other.push(card);
    }

  });
  //console.log(cards);
  copy(cards);
  // console.log(other);
 // console.log(cards.filter(x => x.name == "Argeon Highmayne"));
})();

// TODO: Investigate the RSX module in beta.duelyst.com, since it contains the
// sprite data that I need.  As I understand it RSX is a table indexed by the
// names held in card._private.baseAnimResource.idle inside the GameDataManager
// collection.

// TODO try and find where jquery attaches onClick listeners

// Duelyst DB
  {  "id": "1",
    "enabled": "1",
    "duelyst_id": "1",
    "duelyst_sprite": "https:\/\/assets-counterplaygames.netdna-ssl.com\/production\/resources\/units\/f1_general.png",
    "faction_id": "1",
    "type": "General",
    "label": "Argeon Highmayne",
    "image": "1_idle.png",
    "description": "<b>Bloodborn Spell:<\/b> Give a minion nearby your General +2 Attack.",
    "rarity": "0",
    "attack": "2",
    "health": "25",
    "mana_cost": "0",
    "cost": "0",
    "name": "Argeon Highmayne",
    "img": "..\/sprites\/1_idle.png",
    "hp": "25",
    "text": "<b>Bloodborn Spell:<\/b> Give a minion nearby your General +2 Attack.",
    "faction": "Lyonar" }
// Actual Duelyst
 {
    "baseCardId": 11022,
    "card": {
      "modifierIndices": [],
      "modifiersContextObjects": [
        {
          "type": "ModifierSummonSelfOnReplace",
          "isInherent": true
        }
      ],
      "factionId": 100,
      "name": "Dreamgazer",
      "atk": 1,
      "maxHP": 1,
      "manaCost": 1,
      "rarityId": 3,
      "id": 1011022
    },
    "cardSetId": 1,
    "description": "When you replace this card, summon it nearby.  Your General takes 2 damage.",
    "factionId": 100,
    "factionName": "Neutral",
    "id": 1011022,
    "isAvailable": true,
    "isHiddenInCollection": false,
    "isNeutral": true,
    "isPrismatic": true,
    "isSkinned": false,
    "isUnlockable": false,
    "isUnlockableThroughProgression": false,
    "isUnlockableBasic": false,
    "isUnlockablePrismaticBasic": false,
    "isUnlockablePrismaticWithAchievement": false,
    "isUnlockableWithAchievement": false,
    "manaCost": 1,
    "name": "Dreamgazer",
    "raceName": "",
    "rarityColor": "#f49ac1",
    "rarityId": 3,
    "rarityName": "Epic",
    "rarityIsCraftable": true,
    "skinNum": 0,
    "showRarity": true,
    "type": 3,
    "unlockMessage": null,
    "unlocksAtLevel": 0,
    "unlocksWithFaction": 1,
    "unlocksWithFactionName": "Lyonar Kingdoms",
    "isEntity": true,
    "isGeneral": false,
    "isUnit": true,
    "atk": 1,
    "hp": 1,
    "count": 0,
    "deckCount": 0,
    "isArtifact": false,
    "isCraftable": true,
    "inventoryCount": 0,
    "isSpell": false,
    "isTile": false,
    "isUnlocked": true,
    "keywordDescriptions": [],
    "searchableContent": "Dreamgazer When you replace this card, summon it nearby. Your General takes 2 damage. Epic minion unit prismatic Core Set Core core",
    "canShowSkin": false
  }
