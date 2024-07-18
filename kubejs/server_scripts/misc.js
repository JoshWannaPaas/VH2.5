/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

let sandColors = ['black', 'white', 'blue', 'purple', 'pink']
let dyeColors = ['white', 'orange', 'magenta', 'light_blue','yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'black']

onEvent('recipes', event => {

    event.shaped('1x byg:pendorite_ingot', [
        'PPP',
        'PNE',
        'EEE'
    ], {
        P: 'byg:pendorite_scraps',
        N: 'minecraft:netherite_ingot',
        E: 'minecraft:emerald'
    })

    event.shaped('1x dummmmmmy:target_dummy_placer', [
        ' H ',
        'PAP',
        'OOO'
    ], {
        H: 'minecraft:hay_block',
        P: 'the_vault:perfect_painite',
        A: 'minecraft:armor_stand',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x ispawner:cage_piece', [
        'DDD',
        'DOD',
        'DDD'
    ], {
        D: 'ispawner:cage_dust',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x ispawner:survival_spawner', [
        'WCW',
        'CEC',
        'WCW'
    ], {
        W: 'the_vault:perfect_black_opal',
        C: 'ispawner:cage_piece',
        E: 'the_vault:echo_pog'
    })

    event.shaped('1x quark:soul_bead', [
        ' L ',
        'LSL',
        ' L '
    ], {
        L: 'the_vault:gem_larimar',
        S: 'minecraft:soul_sand'
    })

    event.shaped('1x quark:diamond_heart', [
        'ADA',
        'DVD',
        'ADA'
    ], {
        A: 'the_vault:gem_alexandrite',
        D: 'minecraft:diamond',
        V: 'the_vault:vault_diamond'
    })

    event.shaped('1x snad:snad', [
        ' S ',
        'WSW'
    ], {
        S: 'compressium:sand_2',
        W: 'the_vault:gem_wutodie'
    })

    event.shaped('1x snad:red_snad', [
        ' S ',
        'WSW'
    ], {
        S: 'compressium:redsand_2',
        W: 'the_vault:gem_wutodie'
    })

    event.shaped('4x archers_paradox:quartz_arrow', [
        ' Q ',
        ' S ',
        ' B '
    ], {
        Q: 'minecraft:quartz',
        S: '#forge:rods/wooden',
        B: 'the_vault:gem_benitoite'
    })

    event.shaped('16x archers_paradox:diamond_arrow', [
        ' Q ',
        'LSL',
        ' B '
    ], {
        Q: 'minecraft:quartz',
        S: '#forge:rods/wooden',
        B: 'the_vault:gem_benitoite',
        L: 'the_vault:gem_larimar'
    })

    event.shaped('1x engineersdecor:small_solar_panel', [
        'QQQ',
        'BMB',
        'LRL'
    ], {
        Q: 'minecraft:quartz',
        B: 'the_vault:gem_benitoite',
        M: 'engineersdecor:metal_bar',
        L: '#forge:storage_blocks/lead',
        R: 'minecraft:redstone_block'
    })

    event.shaped('1x engineersdecor:factory_hopper', [
        'PEP',
        'MHM',
        'PMP'
    ], {
        P: 'the_vault:gem_pog',
        E: 'minecraft:ender_eye',
        M: 'engineersdecor:metal_bar',
        H: 'minecraft:hopper'
    })

    event.shaped('1x waystones:warp_stone', [
        'PEP',
        'EGE',
        'PEP'
    ], {
        P: '#the_vault:perfectcommongems',
        E: 'quark:ender_watcher',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x waystones:warp_plate', [
        'PEP',
        'EOE',
        'PEP'
    ], {
        P: '#the_vault:perfectcommongems',
        E: 'quark:ender_watcher',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x torchmaster:feral_flare_lantern', [
        'WGW',
        'CLC',
        'WGW'
    ], {
        W: 'the_vault:gem_wutodie',
        G: '#forge:glass',
        C: 'compressium:gold_1',
        L: 'byg:glowstone_lamp'
    })

    event.shaped('1x torchmaster:dreadlamp', [
        'OOO',
        'GLG',
        'OOO'
    ], {
        O: 'compressium:obsidian_1',
        G: '#forge:glass',
        L: 'byg:glowstone_lamp'
    })

    event.shaped('1x torchmaster:megatorch', [
        ' W ',
        ' T ',
        ' E '
    ], {
        W: 'the_vault:gem_wutodie',
        T: 'minecraft:torch',
        E: 'the_vault:gem_echo'
    })

    event.shaped('1x cookingforblockheads:sink', [
        'AIO',
        'TWT',
        'TTT'
    ], {
        A: 'the_vault:perfect_alexandrite',
        I: 'minecraft:iron_block',
        O: 'the_vault:perfect_black_opal',
        T: 'minecraft:terracotta',
        W: 'the_vault:infinite_water_bucket'
    })

    event.shaped('1x ironfurnaces:crystal_furnace', [
        'GWG',
        'GDG',
        'GEG'
    ], {
        G: '#forge:glass',
        W: 'the_vault:gem_wutodie',
        D: 'ironfurnaces:diamond_furnace',
        E: 'quark:ender_watcher'
    })

    event.shaped('1x ironfurnaces:crystal_furnace', [
        'NPN',
        'MOM',
        'NSN'
    ], {
        N: 'minecraft:netherite_block',
        P: 'the_vault:gem_pog',
        M: 'quark:magma_bricks',
        O: 'ironfurnaces:obsidian_furnace',
        S: 'minecraft:soul_soil'
    })

    event.shaped('1x dimstorage:dimensional_chest', [
        'WCW',
        'CPC',
        'WCW'
    ], {
        W: 'dimstorage:dim_wall',
        C: 'dimstorage:solid_dim_core',
        P: 'the_vault:perfect_wutodie'
    })

    event.shaped('1x dimstorage:dimensional_tank', [
        'WPW',
        'GAG',
        'WCW'
    ], {
        W: 'dimstorage:dim_wall',
        P: 'the_vault:perfect_wutodie',
        G: '#forge:glass',
        A: 'minecraft:cauldron',
        C: 'dimstorage:solid_dim_core'
    })

    event.shaped('1x dimstorage:dim_core', [
        'PRP',
        'RVR',
        'PRP'
    ], {
        P: '#the_vault:perfectcommongems',
        R: 'minecraft:redstone_block',
        V: 'the_vault:vault_diamond'
    })

    event.shaped('1x dimstorage:dim_core', [
        'RPR',
        'PWP',
        'RPR'
    ], {
        P: '#the_vault:perfectcommongems',
        R: 'minecraft:redstone_block',
        W: 'the_vault:gem_wutodie'
    })

    event.shaped('8x iskallutilities:concrete_metal_plate', [
        'SSS',
        'SIS',
        'SSS'
    ], {
        S: 'minecraft:stone',
        I: 'minecraft:iron_ingot'
    })

    event.shaped('1x minecraft:cobweb ', [
        'S S',
        ' B ',
        'SSS'
    ], {
        S: 'minecraft:string',
        B: 'the_vault:gem_benitoite'
    })

    event.shaped('1x ironfurnaces:heater ', [
        'VCV',
        'SRS',
        'SFS'
    ], {
        V: 'the_vault:vault_diamond',
        C: 'minecraft:comparator',
        S: '#forge:stone',
        R: 'compressium:redstone_2',
        F: 'ironfurnaces:diamond_furnace'
    })

    event.shaped('1x ironfurnaces:item_heater ', [
        'VCV',
        'ERE',
        'VCV'
    ], {
        V: 'the_vault:vault_diamond',
        C: 'minecraft:comparator',
        R: 'compressium:redstone_2',
        E: 'minecraft:repeater'
    })

    event.shaped('1x quark:bamboo_block', [
        'BBB',
        'BBB',
        'BBB'
    ], {
        B: 'minecraft:bamboo'
    })

    event.shaped('1x compressium:snow_1', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'minecraft:snow_block'
    })

    event.shaped('1x ispawner:cage_dust', [
        ' L ',
        'LBL',
        ' L '
    ], {
        B: 'the_vault:perfect_benitoite',
        L: 'the_vault:gem_larimar'
    })

    event.shapeless('9x minecraft:snow_block', ['compressium:snow_1'])
    event.shapeless('4x minecraft:snowball', ['minecraft:snow_block'])
    event.shapeless('9x minecraft:bamboo', ['quark:bamboo_block'])
    event.shapeless('9x minecraft:bamboo', ['thermal:bamboo_block'])
    event.shapeless('9x minecraft:golden_apple', ['quark:golden_apple_crate'])

    sandColors.forEach(sandColors =>{
        event.shaped('8x byg:'+sandColors+'_sand', [
            'SSS',
            'SDS',
            'SSS'
        ], {
            S: '#forge:sand',
            D: 'minecraft:'+sandColors+'_dye'
        })
    })

    dyeColors.forEach(dyeColors =>{
        event.shaped('8x minecraft:'+dyeColors+'_concrete', [
            'CCC',
            'CDC',
            'CCC'
        ], {
            C: '#ag:concrete',
            D: dyeColors+'_dye'
        })

        event.shaped('8x minecraft:'+dyeColors+'_concrete_powder', [
            'CCC',
            'CDC',
            'CCC'
        ], {
            C: '#ag:concrete_powder',
            D: dyeColors+'_dye'
        })
    })

    event.shaped(Item.of('botania:terra_pick', "{RepairCost:0,mana:2147483647,Damage:0,enabled:0b,display:{Name:'{\"text\":\"Why would you craft me\"}'}}"), [
        'SOS',
        'OTO',
        'SOS'
    ], {
        S: 'the_vault:spark',
        O: 'the_vault:omega_pog',
        T: 'botania:terra_pick'
    })
})