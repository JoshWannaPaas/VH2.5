/* scripts made by a1qs
for Vault Hunters 2.5 */

onEvent('recipes', event => {

    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'PSP',
        'SLS',
        'PSP'
    ], {
        P: '#the_vault:perfectcommongems',
        S: 'minecraft:string',
        L: 'quark:bonded_leather'
    })

    event.shaped('sophisticatedbackpacks:pickup_upgrade', [
        ' S ',
        'PUP',
        'DDD'
    ], {
        P: '#the_vault:perfectcommongems',
        S: 'minecraft:sticky_piston',
        U: 'sophisticatedbackpacks:upgrade_base',
        D: 'the_vault:vault_diamond'
    })

    event.shaped('sophisticatedbackpacks:advanced_pickup_upgrade', [
        'DED',
        'LUL',
        'DPD'
    ], {
        D: 'the_vault:vault_diamond',
        E: 'the_vault:extraordinary_benitoite',
        L: 'the_vault:extraordinary_larimar',
        U: 'sophisticatedbackpacks:pickup_upgrade',
        P: 'the_vault:gem_pog'
    })

    event.shaped('sophisticatedbackpacks:feeding_upgrade', [
        'DED',
        'MUM',
        'DPD'
    ], {
        D: 'the_vault:vault_diamond',
        E: 'the_vault:extraordinary_alexandrite',
        M: 'the_vault:poisonous_mushroom',
        U: 'sophisticatedbackpacks:upgrade_base',
        P: 'the_vault:gem_pog'
    })

    event.shaped('sophisticatedbackpacks:advanced_feeding_upgrade', [
        'ESE',
        'WUW',
        'DPD'
    ], {
        D: 'the_vault:vault_diamond_block',
        E: 'the_vault:extraordinary_alexandrite',
        S: 'the_vault:vault_stew_mystery',
        W: 'the_vault:extraordinary_wutodie',
        U: 'sophisticatedbackpacks:upgrade_base',
        P: 'the_vault:gem_pog'
    })

    event.shaped('sophisticatedbackpacks:void_upgrade', [
        'EPE',
        'AUA',
        'ECE'
    ], {
       E: 'the_vault:extraordinary_benitoite',
       P: 'the_vault:gem_pog',
       A: 'the_vault:perfect_alexandrite',
       U: 'sophisticatedbackpacks:upgrade_base',
       C: 'the_vault:perfect_echo_gem'
    })

    event.shaped('sophisticatedbackpacks:void_upgrade', [
        'EPE',
        'AUA',
        'ECE'
    ], {
       E: 'the_vault:extraordinary_benitoite',
       P: 'the_vault:gem_pog',
       A: 'the_vault:perfect_alexandrite',
       U: 'sophisticatedbackpacks:upgrade_base',
       C: 'the_vault:perfect_echo_gem'
    })

    event.shaped('sophisticatedbackpacks:advanced_void_upgrade', [
        'EPE',
        'AUA',
        'ECE'
    ], {
       E: 'the_vault:extraordinary_benitoite',
       P: 'the_vault:gem_pog',
       A: 'the_vault:extraordinary_alexandrite',
       U: 'sophisticatedbackpacks:upgrade_base',
       C: 'the_vault:extraordinary_echo_gem'
    })

    event.shaped('sophisticatedbackpacks:restock_upgrade', [
        'BDB',
        'DUD',
        'LOL'
    ], {
       B: 'the_vault:perfect_benitoite',
       D: 'the_vault:vault_diamond',
       U: 'sophisticatedbackpacks:upgrade_base',
       L: 'the_vault:perfect_larimar',
       O: 'the_vault:perfect_black_opal',
    })

    event.shaped('sophisticatedbackpacks:advanced_restock_upgrade', [
        'BDB',
        'DUD',
        'LPL'
    ], {
       B: 'the_vault:perfect_benitoite',
       D: 'the_vault:vault_diamond_block',
       U: 'sophisticatedbackpacks:upgrade_base',
       L: 'the_vault:perfect_larimar',
       P: 'the_vault:gem_pog',
    })

    event.shaped('sophisticatedbackpacks:deposit_upgrade', [
        'BOB',
        'DUD',
        'LDL'
    ], {
       B: 'the_vault:perfect_benitoite',
       D: 'the_vault:vault_diamond',
       U: 'sophisticatedbackpacks:upgrade_base',
       L: 'the_vault:perfect_larimar',
       O: 'the_vault:gem_pog',
    })

    event.shaped('sophisticatedbackpacks:advanced_deposit_upgrade', [
        'BPB',
        'DUD',
        'LDL'
    ], {
       B: 'the_vault:perfect_benitoite',
       D: 'the_vault:vault_diamond_block',
       U: 'sophisticatedbackpacks:upgrade_base',
       L: 'the_vault:perfect_larimar',
       P: 'the_vault:gem_pog',
    })

    event.shaped('sophisticatedbackpacks:refill_upgrade', [
        'DPD',
        'OUO',
        'BLB'
    ], {
       D: 'the_vault:vault_diamond',
       P: 'the_vault:gem_pog',
       O: 'the_vault:perfect_black_opal',
       U: 'sophisticatedbackpacks:upgrade_base',
       B: 'the_vault:extraordinary_benitoite',
       L: 'the_vault:extraordinary_larimar'
    })

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
        'AOA',
        'OUO',
        'LOL'
    ], {
       A: 'the_vault:perfect_alexandrite',
       O: 'the_vault:gem_black_opal',
       U: 'sophisticatedbackpacks:upgrade_base',
       L: 'the_vault:perfect_larimar'
    })

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
        'BDB',
        'DUD',
        'LPL'
    ], {
       B: 'the_vault:extraordinary_benitoite',
       D: 'the_vault:vault_diamond',
       U: 'sophisticatedbackpacks:stack_upgrade_tier_1',
       L: 'the_vault:extraordinary_larimar',
       P: 'the_vault:gem_pog',
    })

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
        'DBD',
        'OUO',
        'DED'
    ], {
       D: 'the_vault:vault_diamond_block',
       B: 'the_vault:extraordinary_benitoite',
       O: 'the_vault:extraordinary_black_opal',
       U: 'sophisticatedbackpacks:stack_upgrade_tier_2',
       E: 'the_vault:echo_pog'
    })

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', [
        'DED',
        'EUE',
        'DED'
    ], {
       D: 'the_vault:vault_diamond_block',
       E: 'the_vault:echo_pog',
       U: 'sophisticatedbackpacks:stack_upgrade_tier_3'
    })


    event.shaped(Item.of('sophisticatedbackpacks:jukebox_upgrade', "{RepairCost:0,display:{Name:'{\"text\":\"Sorry... <3\"}'}}"), [
        'ODO',
        'SUS',
        'OSO'
    ], {
        O: 'the_vault:omega_pog',
        D: 'minecraft:music_disc_11',
        S: 'the_vault:spark',
        U: 'sophisticatedbackpacks:upgrade_base'
    })


    // custom backpack recipes to keep upgrades and stuff :peeposhy:

    event.custom({
        "type": "minecraft:crafting_shaped",
        "conditions": [
          {
            "itemRegistryName": "backpack",
            "type": "sophisticatedbackpacks:item_enabled"
          }
        ],
        "pattern": [
          "WPW",
          "ACA",
          "DDD"
        ],
        "key": {
          "W": {
            "item": "the_vault:perfect_wutodie"
          },
          "P": {
            "item": "the_vault:gem_pog"
          },
          "A": {
            "item": "the_vault:perfect_alexandrite"
          },
          "C": {
            "item": "the_vault:vault_crate_arena"
          },
          "D": {
            "item": "the_vault:vault_diamond"
          }
        },
        "result": {
          "item": "sophisticatedbackpacks:backpack"
        }
    })

    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "itemRegistryName": "iron_backpack",
            "type": "sophisticatedbackpacks:item_enabled"
          }
        ],
        "pattern": [
          "APO",
          "IBI",
          "OPA"
        ],
        "key": {
          "A": {
            "item": "the_vault:perfect_alexandrite"
          },
          "P": {
            "item": "the_vault:gem_pog"
          },
          "O": {
            "item": "the_vault:perfect_black_opal"
          },
          "I": {
            "item": "compressium:iron_2"
          },
          "B": {
            "item": "sophisticatedbackpacks:backpack"
          },
        },
        "result": {
          "item": "sophisticatedbackpacks:iron_backpack"
        }
    })

    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "itemRegistryName": "gold_backpack",
            "type": "sophisticatedbackpacks:item_enabled"
          }
        ],
        "pattern": [
          "APO",
          "GBG",
          "ODA"
        ],
        "key": {
          "A": {
            "item": "the_vault:extraordinary_alexandrite"
          },
          "P": {
            "item": "the_vault:echo_pog"
          },
          "O": {
            "item": "the_vault:extraordinary_black_opal"
          },
          "G": {
            "item": "compressium:gold_2"
          },
          "B": {
            "item": "sophisticatedbackpacks:iron_backpack"
          },
          "D": {
            "item": "the_vault:vault_diamond_block"
          }
        },
        "result": {
          "item": "sophisticatedbackpacks:gold_backpack"
        }
    })

    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "itemRegistryName": "diamond_backpack",
            "type": "sophisticatedbackpacks:item_enabled"
          }
        ],
        "pattern": [
          "DPD",
          "CBC",
          "DED"
        ],
        "key": {
          "D": {
            "item": "the_vault:vault_diamond_block"
          },
          "P": {
            "item": "the_vault:omega_pog"
          },
          "C": {
            "item": "compressium:diamond_2"
          },
          "B": {
            "item": "sophisticatedbackpacks:gold_backpack"
          },
          "E": {
            "item": "the_vault:extraordinary_echo_gem"
          }
        },
        "result": {
          "item": "sophisticatedbackpacks:diamond_backpack"
        }
    })

    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "itemRegistryName": "netherite_backpack",
            "type": "sophisticatedbackpacks:item_enabled"
          }
        ],
        "pattern": [
          "EOE",
          "NBN",
          "EOE"
        ],
        "key": {
          "E": {
            "item": "the_vault:echo_pog"
          },
          "O": {
            "item": "the_vault:extraordinary_black_opal"
          },
          "N": {
            "item": "compressium:netherite_2"
          },
          "B": {
            "item": "sophisticatedbackpacks:diamond_backpack"
          }
        },
        "result": {
          "item": "sophisticatedbackpacks:netherite_backpack"
        }
    })
})