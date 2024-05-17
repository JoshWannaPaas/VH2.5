/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x botania:overgrowth_seed', [
        'BLB',
        'LGL',
        'BLB'
    ], {
        B: 'the_vault:perfect_benitoite',
        L: 'the_vault:perfect_larimar',
        G: 'minecraft:green_dye'
    })

    event.shaped('1x botania:blood_pendant', [
        'PSP',
        'SES',
        'VSP'
    ], {
        P: '#the_vault:perfectcommongems',
        S: 'minecraft:sea_lantern',
        E: 'minecraft:end_crystal',
        V: 'the_vault:vault_diamond'
    })

    event.shaped('1x botania:mana_pool', [
        '   ',
        'LPL',
        'LLL'
    ], {
        P: '#the_vault:perfectcommongems',
        L: 'botania:livingrock'
    })

    event.shaped('1x botania:apothecary_default', [
        'CBC',
        'PFP',
        'FFF'
    ], {
        C: 'minecraft:cobblestone_slab',
        B: '#botania:petals',
        P: '#the_vault:perfectcommongems',
        F: 'minecraft:cobblestone'
    })

    event.shaped(Item.of('botania:twig_wand', '{color1:0,color2:0}'), [
        ' BT',
        'PTB',
        'TP '
    ], {
        B: '#botania:petals',
        T: 'botania:livingwood_twig',
        P: '#the_vault:perfectcommongems'
    })

    event.shaped('1x botania:mana_spreader', [
        'LLL',
        'GBP',
        'LLL'
    ], {
        L: 'botania:livingwood',
        G: 'minecraft:gold_block',
        B: '#botania:petals',
        P: '#the_vault:perfectcommongems'
    })

    event.shaped('1x botania:mana_spreader', [
        'LLL',
        'GBP',
        'LLL'
    ], {
        L: 'botania:livingwood',
        G: 'minecraft:gold_block',
        B: '#botania:petals',
        P: '#the_vault:perfectcommongems'
    })

    event.shaped('1x botania:elven_spreader', [
        'DDD',
        'GBP',
        'DDD'
    ], {
        D: 'botania:dreamwood',
        G: 'minecraft:gold_block',
        B: '#botania:petals',
        P: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x botania:natura_pylon', [
        ' T ',
        'TPT',
        ' Q '
    ], {
        T: 'botania:terrasteel_nugget',
        P: 'botania:mana_pylon',
        Q: 'quark:ender_watcher'
    })

    event.shaped('1x botania:water_rod', [
        '  I',
        ' T ',
        'R  '
    ], {
        I: 'the_vault:infinite_water_bucket',
        T: 'botania:livingwood_twig',
        R: 'botania:rune_water'
    })

    event.shaped('1x botania:diluted_pool', [
        '   ',
        'SGS',
        'SSS'
    ], {
        S: 'botania:livingrock_slab',
        G: '#the_vault:nonplayergems'
    })

    event.shaped('1x botania:fabulous_pool', [
        '   ',
        'SPS',
        'SSS'
    ], {
        S: 'botania:shimmerrock',
        P: '#the_vault:playergems'
    })

    event.shaped('1x botania:fabulous_pool', [
        ' G ',
        'BPB',
        'BBB'
    ], {
        G: '#the_vault:playergems',
        B: 'botania:bifrost_perm',
        P: 'botania:mana_pool'
    })

    event.shaped('1x botania:alchemy_catalyst', [
        'LGL',
        'BGB',
        'LGL'
    ], {
        L: 'botania:livingrock',
        G: 'compressium:gold_1',
        B: 'botania:brewery',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x botania:terra_pick', [
        'BMB',
        'GEG',
        ' D '
    ], {
        B: 'botania:terrasteel_block',
        M: 'botania:mana_tablet',
        G: 'botania:gaia_ingot',
        E: 'the_vault:echo_pog',
        D: 'botania:dreamwood_twig'
    })

    event.shaped('1x botania:gaia_ingot', [
        'BGB',
        'GTG',
        'BGB'
    ], {
        B: 'the_vault:extraordinary_black_opal',
        G: 'botania:life_essence',
        T: 'botania:terrasteel_ingot'
    })

    event.shaped('1x botania:magnet_ring', [
        'LM ',
        'MWM',
        ' M '
    ], {
        L: 'botania:lens_magnet',
        M: 'botania:manasteel_ingot',
        W: 'the_vault:vault_magnet_weak'
    })

    event.shaped('1x botania:travel_belt', [
        'EB ',
        'BGB',
        'TBA'
    ], {
        E: 'botania:rune_earth',
        B: 'quark:bonded_leather',
        G: 'the_vault:gem_pog',
        T: 'botania:terrasteel_ingot',
        A: 'botania:rune_air'

    })

    event.shaped('1x botania:speed_up_belt', [
        ' C ',
        'MTS',
        ' A '
    ], {
        C: 'minecraft:cartography_table',
        M: 'botania:mutated_seeds',
        T: 'botania:travel_belt',
        S: 'botania:scorched_seeds',
        A: 'the_vault:sweet_apple'
    })

    event.shaped('1x botania:super_cloud_pendant', [
        'CEC',
        'CPC',
        'LOL'
    ], {
        C: 'minecraft:end_crystal',
        E: 'botania:elementium_block',
        P: 'botania:cloud_pendant',
        L: 'botania:life_essence',
        O: 'the_vault:omega_pog'
    })

    event.shaped('1x botania:cloud_pendant', [
        'ACP',
        'CPC',
        'TCR'
    ], {
        C: 'botania:manaweave_cloth',
        P: 'the_vault:gem_pog',
        T: 'botania:terrasteel_ingot',
        A: 'botania:rune_air',
        R: 'botania:rune_autumn'
    })

    event.shaped('1x botania:lava_pendant', [
      'FCP',
      'CPC',
      'TCS'
  ], {
      F: 'botania:rune_fire',
      C: 'botania:manaweave_cloth',
      P: 'the_vault:gem_pog',
      T: 'botania:terrasteel_ingot',
      S: 'botania:rune_summer'
  })

    event.shaped('1x botania:super_lava_pendant', [
        'BEB',
        'BPB',
        'LVL'
    ], {
        B: 'botania:blaze_block',
        E: 'botania:elementium_block',
        P: 'botania:lava_pendant',
        L: 'botania:life_essence',
        V: 'the_vault:echo_pog'
    })

    event.shaped('1x botania:ice_pendant', [
        'WCP',
        'CPC',
        'TCI'
    ], {
        C: 'botania:manaweave_cloth',
        P: 'the_vault:gem_pog',
        T: 'botania:terrasteel_ingot',
        W: 'botania:rune_water',
        I: 'botania:rune_winter'
    })

    event.shaped('1x botania:auto_crafting_halo', [
        'TCT',
        'CPC',
        'TCT'
    ], {
        T: 'botania:terrasteel_ingot',
        C: 'botania:manaweave_cloth',
        P: 'botania:super_cloud_pendant'
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "item": "botania:mana_pearl"
          },
          {
            "item": "the_vault:perfect_black_opal"
          }
        ],
        "output": [
          {
            "item": "botania:pixie_dust"
          }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "tag": "forge:ingots/manasteel"
          },
          {
            "item": "the_vault:perfect_alexandrite"
          }
        ],
        "output": [
          {
            "item": "botania:elementium_ingot"
          }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "tag": "forge:storage_blocks/manasteel"
          },
          {
            "item": "the_vault:extraordinary_alexandrite"
          },
          {
            "item": "the_vault:extraordinary_alexandrite"
          }
        ],
        "output": [
          {
            "item": "botania:elementium_block"
          }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "tag": "forge:gems/mana_diamond"
          },
          {
            "item": "the_vault:perfect_wutodie"
          }
        ],
        "output": [
          {
            "item": "botania:dragonstone"
          }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "item": "botania:mana_diamond_block"
          },
          {
            "item": "the_vault:extraordinary_wutodie"
          },
          {
            "item": "the_vault:extraordinary_wutodie"
          }
        ],
        "output": [
          {
            "item": "botania:dragonstone_block"
          }
        ]
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "item": "botania:livingwood"
          },
          {
            "tag": "the_vault:perfectcommongems"
          }
        ],
        "output": [
          {
            "item": "botania:dreamwood"
          }
        ]
    })

    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
            "item": "botania:pure_daisy"
          },
          "ingredients": [
            {"tag": "botania:petals/white"},
            {"tag": "botania:petals/white"},
            {"tag": "botania:petals/white"},
            {"tag": "the_vault:perfectcommongems"},
            {"tag": "botania:petals/white"}
        ]
    })

    event.custom({
        "type": "botania:mana_infusion",
        "mana": 25000,
        "output": {
          "item": "botania:mana_diamond"},
        "input":[
          {"item": "the_vault:vault_diamond"}
        ]
    })

    event.custom({
        "type": "botania:mana_infusion",
        "mana": 200000,
        "output": {
          "item": "botania:mana_diamond_block"},
        "input":[
          {"item": "the_vault:vault_diamond_block"}
        ]
    })
    
    event.custom({
        "type": "botania:terra_plate",
        "mana": 500000,
        "result": {
          "item": "botania:terrasteel_ingot"
        },
        "ingredients": [
          {"item": "the_vault:vaulterite_ingot"},
          {"item": "the_vault:vault_diamond"},
          {"item": "the_vault:vault_essence"},
          {"item": "botania:mana_diamond"},
          {"item": "botania:manasteel_ingot"},
          {"item": "botania:mana_pearl"}
      ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_air",
        },
        "mana": 12000,
        "ingredients": [
          {"tag": "forge:dusts/mana"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "minecraft:carpets"},
          {"tag": "the_vault:perfectcommongems"},
          {"item": "minecraft:feather"},
          {"item": "minecraft:string"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_autumn"
        },
        "mana": 18400,
        "ingredients": [
          {"tag": "botania:runes/fire"},
          {"item": "the_vault:perfect_wutodie"},
          {"tag": "botania:runes/air"},
          {"tag": "minecraft:leaves"},
          {"tag": "minecraft:leaves"},
          {"tag": "minecraft:leaves"},
          {"item": "minecraft:spider_eye"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_earth",
        },
        "mana": 12000,
        "ingredients": [
          {"tag": "forge:dusts/mana"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "the_vault:perfectcommongems"},
          {"tag": "forge:stone"},
          {"tag": "forge:storage_blocks/coal"},
          {"item": "minecraft:brown_mushroom"},
          {"item": "minecraft:red_mushroom"}
          ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_envy"
        },
        "mana": 27600,
        "ingredients": [
          {"tag": "forge:gems/mana_diamond"},
          {"item": "the_vault:perfect_black_opal"},
          {"tag": "forge:gems/mana_diamond"},
          {"tag": "botania:runes/winter"},
          {"tag": "botania:runes/water"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_fire",
        },
        "mana": 12000,
        "ingredients": [
          {"tag": "forge:dusts/mana"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "the_vault:perfectcommongems"},
          {"item": "minecraft:nether_brick"},
          {"item": "minecraft:gunpowder"},
          {"item": "minecraft:nether_wart"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_gluttony"
        },
        "mana": 27600,
        "ingredients": [
          {"tag": "forge:gems/mana_diamond"},
          {"item": "the_vault:perfect_black_opal"},
          {"tag": "forge:gems/mana_diamond"},
          {"tag": "botania:runes/winter"},
          {"tag": "botania:runes/fire"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_greed"
        },
        "mana": 27600,
        "ingredients": [
          {"tag": "forge:gems/mana_diamond"},
          {"item": "the_vault:perfect_black_opal"},
          {"tag": "forge:gems/mana_diamond"},
          {"tag": "botania:runes/spring"},
          {"tag": "botania:runes/water"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_lust"
        },
        "mana": 27600,
        "ingredients": [
          {"tag": "forge:gems/mana_diamond"},
          {"item": "the_vault:perfect_black_opal"},
          {"tag": "forge:gems/mana_diamond"},
          {"tag": "botania:runes/summer"},
          {"tag": "botania:runes/air"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_mana"
        },
        "mana": 18400,
        "ingredients": [
          {"tag": "the_vault:perfectcommongems"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "forge:ingots/manasteel"},
          {"item": "botania:mana_pearl"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_pride"
        },
        "mana": 27600,
        "ingredients": [
          {"tag": "forge:gems/mana_diamond"},
          {"item": "the_vault:perfect_black_opal"},
          {"tag": "forge:gems/mana_diamond"},
          {"tag": "botania:runes/summer"},
          {"tag": "botania:runes/fire"}
        ]
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_sloth"
        },
        "mana": 27600,
        "ingredients": [
          {"tag": "forge:gems/mana_diamond"},
          {"item": "the_vault:perfect_black_opal"},
          {"tag": "forge:gems/mana_diamond"},
          {"tag": "botania:runes/autumn"},
          {"tag": "botania:runes/air"}
        ]  
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_spring"
        },
        "mana": 18400,
        "ingredients": [
          {"tag": "botania:runes/water"},
          {"item": "the_vault:perfect_wutodie"},
          {"tag": "botania:runes/fire"},
          {"tag": "minecraft:saplings"},
          {"tag": "minecraft:saplings"},
          {"tag": "minecraft:saplings"},
          {"item": "minecraft:wheat"}
        ] 
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_summer"
        },
        "mana": 18400,
        "ingredients": [
          {"tag": "botania:runes/earth"},
          {"item": "the_vault:perfect_wutodie"},
          {"tag": "botania:runes/air"},
          {"tag": "minecraft:sand"},
          {"tag": "minecraft:sand"},
          {"item": "minecraft:slime_ball"},
          {"item": "minecraft:melon_slice"}
        ]     
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_water",
        },
        "mana": 12000,
        "ingredients": [
          {"tag": "forge:dusts/mana"},
          {"tag": "forge:ingots/manasteel"},
          {"tag": "the_vault:perfectcommongems"},
          {"item": "minecraft:bone_meal"},
          {"item": "minecraft:sugar_cane"},
          {"item": "minecraft:fishing_rod"}
        ] 
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_winter"
        },
        "mana": 18400,
        "ingredients": [
          {"tag": "botania:runes/water"},
          {"tag": "botania:runes/earth"},
          {"item": "the_vault:perfect_wutodie"},
          {"item": "minecraft:snow_block"},
          {"item": "minecraft:snow_block"},
          {"tag": "minecraft:wool"},
          {"item": "minecraft:cake"}
        ]   
    })

    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_wrath"
        },
        "mana": 27600,
        "ingredients": [
          {"tag": "forge:gems/mana_diamond"},
          {"item": "the_vault:gem_pog"},
          {"tag": "forge:gems/mana_diamond"},
          {"tag": "botania:runes/winter"},
          {"tag": "botania:runes/earth"}
        ]     
    })

    event.custom({
      "type": "botania:terra_plate",
      "mana": 5000000, // 5 mana pools LOL
      "ingredients": [
        {
          "item": "botania:gaia_ingot"
        },
        {
          "item": "botania:lens_normal"
        },
        {
          "item": "botania:blacker_lotus"
        },
        {
          "item": "botania:temperance_stone"
        },
        {
          "item": "botania:aura_ring_greater"
        },
        {
        "item": "kubejs:weaker_omega_pog"
        }
  ],
  "result": {
    "item": "botania:thor_ring"
  }
  })

    event.shapeless('1x botania:magnet_ring_greater', ['botania:magnet_ring', 'the_vault:vault_magnet_omega', 'the_vault:gem_pog'])
    event.shapeless('1x botania:glimmering_livingwood', ['#botania:livingwood', 'the_vault:vault_dust'])
})