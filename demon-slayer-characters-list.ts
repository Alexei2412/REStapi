import {Component} from '@angular/core';
import {CharacterCard} from '../../components/character-card/character-card';
import {SecondaryCharacterCard} from '../../components/secondary-character-card/secondary-character-card';
import {CharacterModel} from '../../interfaces/character-model';
import {CombatStyleModel} from '../../interfaces/combat-style-model';
import {CharacterCardType} from '../../enums/character-card-type';

@Component({
  selector: 'app-demon-slayer-characters-list',
  imports: [CharacterCard, SecondaryCharacterCard],
  templateUrl: './demon-slayer-characters-list.html',
  styleUrl: './demon-slayer-characters-list.css',
})
export class DemonSlayerCharactersList {
  readonly characterCardType = CharacterCardType;

  combatStylesList: CombatStyleModel[] = [
    {
      "id": 1,
      "name": "Sun Breathing",
      "description": "Breathing Style only known and taught by the Kamado Family, later revealed to be the first Breathing Style",
      "img": "https://www.demonslayer-api.com/api/v1/combat-styles/images/sun-breathing.webp",
      "combat_style_character": [
        { "id": 1, "description": "Tanjiro Kamado" },
        { "id": 45, "description": "Yoriichi" }
      ]
    },
    {
      "id": 2,
      "name": "Water Breathing",
      "description": "Water Breathing is one of the five main Breathing Styles directly derived from Sun Breathing.",
      "img": "https://www.demonslayer-api.com/api/v1/combat-styles/images/water-breathing.webp",
      "combat_style_character": [
        { "id": 1, "description": "Tanjiro Kamado" },
        { "id": 3, "description": "Giyu Tomioka" },
        { "id": 4, "description": "Sakonji Urokodaki" },
        { "id": 5, "description": "Sabito" },
        { "id": 6, "description": "Makomo" },
        { "id": 11, "description": "Aoi Kanzaki" },
        { "id": 21, "description": "Murata" }
      ]
    },
    {
      "id": 3,
      "name": "Combustible Blood",
      "description": "Nezuko´s Blood Demon Art allows her to combust her blood into pink-colored flames at will. Her flames have a special property which makes them exclusively harmful to demons.",
      "img": "https://www.demonslayer-api.com/api/v1/combat-styles/images/combustible-blood.webp",
      "combat_style_character": [
        { "id": 2, "description": "Nezuko Kamado" }
      ]
    },
    {
      "id": 4,
      "name": "Thunder Breathing",
      "description": "Thunder Breathing is a Breathing Style that mimics lightning, specifically swift strikes and movements akin to lightning ripping through the sky, and replicates it with the user´s movements, techniques and abilities.",
      "img": "https://www.demonslayer-api.com/api/v1/combat-styles/images/thunder-breathing.webp",
      "combat_style_character": [
        { "id": 9, "description": "Zenitsu Agatsuma" }
      ]
    },
    {
      "id": 5,
      "name": "Flesh Manipulation",
      "description": "Flesh Manipulation is a supernatural ability possessed by demons that allow them to alter and control their own flesh and body.",
      "img": "",
      "combat_style_character": [
        { "id": 7, "description": "Hand Demon" }
      ]
    },
    {
      "id": 6,
      "name": "Dual Wielding",
      "description": "Genya utilizes both a double-barreled shotgun with a Nichirin blade. He is shown to excel in blending both long-ranged and short-ranged combat",
      "img": "",
      "combat_style_character": [
        { "id": 8, "description": "Genya Shinazugawa" }
      ]
    },
    {
      "id": 7,
      "name": "Beast Breathing",
      "description": "Beast Breathing is a Breathing Style that mimics beasts/wild animals, specifically their unpredictable, ferocious and wild nature, including movements, attacks and senses, and replicates it with the user´s movements, techniques and abilities.",
      "img": "https://www.demonslayer-api.com/api/v1/combat-styles/images/beast-breathing.webp",
      "combat_style_character": [
        { "id": 10, "description": "Inosuke Hashibira" }
      ]
    },
    {
      "id": 8,
      "name": "Flower Breathing",
      "description": "Flower Breathing is a Breathing Style that mimics both perennial flowers and fruit blossoms and replicates them with the user´s movements, techniques, and abilities.",
      "img": "",
      "combat_style_character": [
        { "id": 12, "description": "Kanao Tsuyuri" }
      ]
    },
    {
      "id": 9,
      "name": "Swamp Domain",
      "description": "The Swamp Demon was able to conjure a pocket swamp dimension in which he can navigate freely.",
      "img": "",
      "combat_style_character": [
        { "id": 13, "description": "Swamp Demon" }
      ]
    },
    {
      "id": 10,
      "name": "Biokinesis",
      "description": "Muzan´s Blood Demon Art grants him powerful biokinetic abilities, most prominently the ability to manipulate his body at will and shapeshift instantly.",
      "img": "https://www.demonslayer-api.com/api/v1/combat-styles/images/biokinesis.webp",
      "combat_style_character": [
        { "id": 14, "description": "Muzan Kibutsuji" }
      ]
    }
  ];

  characterList = [
    {
      "id": 1,
      "name": "Tanjiro Kamado",
      "age": 16,
      "gender": "Male",
      "race": "Human",
      "description": "Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/1.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Work at it. All I can do is work hard! That´s the story of my life!"
    },
    {
      "id": 2,
      "name": "Nezuko Kamado",
      "age": 14,
      "gender": "Female",
      "race": "Demon",
      "description": "She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/2.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Humans are to be protected and saved... I will never hurt them."
    },
    {
      "id": 3,
      "name": "Giyu Tomioka",
      "age": 21,
      "gender": "Male",
      "race": "Human",
      "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Water Hashira. He has a reserved personality and a very strong sense of justice.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/3.webp",
      "affiliation_id": 2,
      "arc_id": 1,
      "quote": "Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action."
    },
    {
      "id": 4,
      "name": "Sakonji Urokodaki",
      "age": 70,
      "gender": "Male",
      "race": "Human",
      "description": "Sakonji Urokodaki is a retired member of the Demon Slayer Corps, having held the position of the previous Water Hashira. He is the main cultivator of the Water Breathing style, having trained Makomo, Sabito, Giyu Tomioka, and Tanjiro Kamado.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/4.webp",
      "affiliation_id": 3,
      "arc_id": 1,
      "quote": "Remember to take a long breath so the oxygen flows into every cell in your body."
    },
    {
      "id": 5,
      "name": "Sabito",
      "age": 13,
      "gender": "Male",
      "race": "Human",
      "description": "Sabito was a former apprentice of Sakonji Urokodaki. He appeared to assist Tanjiro Kamado in his preparations for the Final Selection exam.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/5.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "You have to make sure you never forget any of the secrets Urokodaki taught you! Pound it into the marrow of your bones!"
    }
  ]

  getDemonSlayerCharacterList(): CharacterModel[] {
    return this.characterList.map(
      element => this.getCharacterModel(element)
    );
  }

  getCharacterModel(data: any): CharacterModel {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      img: data.img
    }
  }
}
