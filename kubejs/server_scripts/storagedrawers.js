/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

let woodTypes = ["oak","birch","spruce","dark_oak","jungle","acacia"]
let netherWoodTypes = ["warped", "crimson"]

onEvent('recipes', event => {

    event.shaped('1x storagedrawers:emerald_storage_upgrade ', [
        'GSG',
        'BTB',
        'GSG'
    ], {
        G: 'the_vault:gem_black_opal',
        S: '#forge:rods/wooden',
        B: 'compressium:emerald_1',
        T: 'storagedrawers:upgrade_template'
    })

    event.shaped('1x storagedrawers:obsidian_storage_upgrade ', [
        'GSG',
        'ETE',
        'GSG'
    ], {
        G: 'the_vault:gem_benitoite',
        S: '#forge:rods/wooden',
        E: 'compressium:obsidian_1',
        T: 'storagedrawers:upgrade_template'
    })

    event.shaped('1x storagedrawers:iron_storage_upgrade ', [
        'GSG',
        'ETE',
        'GSG'
    ], {
        G: 'the_vault:gem_alexandrite',
        S: '#forge:rods/wooden',
        E: 'compressium:iron_1',
        T: 'storagedrawers:upgrade_template'
    })

    event.shaped('1x storagedrawers:gold_storage_upgrade ', [
        'GSG',
        'ETE',
        'GSG'
    ], {
        G: 'the_vault:gem_wutodie',
        S: '#forge:rods/wooden',
        E: 'compressium:gold_1',
        T: 'storagedrawers:upgrade_template'
    })

    event.shaped('1x storagedrawers:diamond_storage_upgrade ', [
        'GSG',
        'ETE',
        'GSG'
    ], {
        G: 'the_vault:gem_painite',
        S: '#forge:rods/wooden',
        E: 'compressium:diamond_1',
        T: 'storagedrawers:upgrade_template'
    })

    event.shaped('1x storagedrawers:void_upgrade ', [
        'GSG',
        'ETE',
        'GSG'
    ], {
        G: 'compressium:obsidian_1',
        S: 'minecraft:cactus',
        E: 'compressium:endstone_1',
        T: 'storagedrawers:upgrade_template'
    })

    event.shaped('1x storagedrawers:controller ', [
        'SSS',
        'CDC',
        'GBG'
    ], {
        S: '#forge:stone',
        C: 'minecraft:comparator',
        D: '#storagedrawers:drawers',
        G: 'the_vault:gem_pog',
        B: 'minecraft:diamond_block'
    })

    event.shaped('1x storagedrawers:compacting_drawers_3 ', [
        'SSS',
        'PDP',
        'GBG'
    ], {
        S: '#forge:stone',
        P: 'minecraft:piston',
        D: '#storagedrawers:drawers',
        G: 'the_vault:gem_black_opal',
        B: 'compressium:iron_1'
    })

    event.shaped('1x framedcompactdrawers:framed_full_one ', [
        'SSS',
        'BCB',
        'SSS'
    ], {
        S: '#forge:rods/wooden',
        B: 'the_vault:gem_benitoite',
        C: '#forge:chests/wooden'
    })

    event.shaped('1x framedcompactdrawers:framed_full_two ', [
        'SWS',
        'BCB',
        'SWS'
    ], {
        S: '#forge:rods/wooden',
        B: 'the_vault:gem_benitoite',
        C: '#forge:chests/wooden',
        W: '#minecraft:wooden_slabs'
    })

    event.shaped('1x framedcompactdrawers:framed_full_four ', [
        'WSW',
        'BCB',
        'WSW'
    ], {
        S: '#forge:rods/wooden',
        B: 'the_vault:gem_benitoite',
        C: '#forge:chests/wooden',
        W: '#minecraft:wooden_slabs'
    })

    event.shaped('1x framedcompactdrawers:framed_full_four ', [
        'WSW',
        'BCB',
        'WSW'
    ], {
        S: '#forge:rods/wooden',
        B: 'the_vault:gem_benitoite',
        C: '#forge:chests/wooden',
        W: '#minecraft:wooden_slabs'
    })

    event.shaped('2x framedcompactdrawers:framed_half_one ', [
        ' W ',
        'BCB',
        ' W '
    ], {
        B: 'the_vault:gem_benitoite',
        C: '#forge:chests/wooden',
        W: '#minecraft:wooden_slabs'
    })

    event.shaped('2x framedcompactdrawers:framed_half_two ', [
        'W W',
        'BCB',
        'W W'
    ], {
        B: 'the_vault:gem_benitoite',
        C: '#forge:chests/wooden',
        W: '#minecraft:wooden_slabs'
    })

    event.shaped('2x framedcompactdrawers:framed_half_four ', [
        'WWW',
        'BCB',
        'WWW'
    ], {
        B: 'the_vault:gem_benitoite',
        C: '#forge:chests/wooden',
        W: '#minecraft:wooden_slabs'
    })

    //1x full drawers

    woodTypes.forEach(woodTypes => {
        event.shaped('1x storagedrawers:'+woodTypes+'_full_drawers_1' , [
            'WWW',
            'BCB',
            'WWW'
        ], {
            W: 'minecraft:'+woodTypes+'_log',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    netherWoodTypes.forEach(netherWoodTypes => {
        event.shaped('1x storagedrawers:'+netherWoodTypes+'_full_drawers_1' , [
            'WWW',
            'BCB',
            'WWW'
        ], {
            W: 'minecraft:'+netherWoodTypes+'_stem',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    //2x full drawer

    woodTypes.forEach(woodTypes => {
        event.shaped('1x storagedrawers:'+woodTypes+'_full_drawers_2' , [
            'WCW',
            'BWB',
            'WCW'
        ], {
            W: 'minecraft:'+woodTypes+'_log',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    netherWoodTypes.forEach(netherWoodTypes => {
        event.shaped('1x storagedrawers:'+netherWoodTypes+'_full_drawers_2' , [
            'WCW',
            'BWB',
            'WCW'
        ], {
            W: 'minecraft:'+netherWoodTypes+'_stem',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    // 4x full drawer

    woodTypes.forEach(woodTypes => {
        event.shaped('1x storagedrawers:'+woodTypes+'_full_drawers_4' , [
            'CWC',
            'BWB',
            'CWC'
        ], {
            W: 'minecraft:'+woodTypes+'_log',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    netherWoodTypes.forEach(netherWoodTypes => {
        event.shaped('1x storagedrawers:'+netherWoodTypes+'_full_drawers_4' , [
            'CWC',
            'BWB',
            'CWC'
        ], {
            W: 'minecraft:'+netherWoodTypes+'_stem',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    // 1x half drawer

    woodTypes.forEach(woodTypes => {
        event.shaped('2x storagedrawers:'+woodTypes+'_half_drawers_1' , [
            'WWW',
            'BCB',
            'WWW'
        ], {
            W: 'minecraft:stripped_'+woodTypes+'_log',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    netherWoodTypes.forEach(netherWoodTypes => {
        event.shaped('2x storagedrawers:'+netherWoodTypes+'_half_drawers_1' , [
            'WWW',
            'BCB',
            'WWW'
        ], {
            W: 'minecraft:stripped_'+netherWoodTypes+'_stem',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    // 2x half drawer

    woodTypes.forEach(woodTypes => {
        event.shaped('2x storagedrawers:'+woodTypes+'_half_drawers_2' , [
            'WCW',
            'BWB',
            'WCW'
        ], {
            W: 'minecraft:stripped_'+woodTypes+'_log',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    netherWoodTypes.forEach(netherWoodTypes => {
        event.shaped('2x storagedrawers:'+netherWoodTypes+'_half_drawers_2' , [
            'WCW',
            'BWB',
            'WCW'
        ], {
            W: 'minecraft:stripped_'+netherWoodTypes+'_stem',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    // 4x half drawer

    woodTypes.forEach(woodTypes => {
        event.shaped('2x storagedrawers:'+woodTypes+'_half_drawers_4' , [
            'CWC',
            'BWB',
            'CWC'
        ], {
            W: 'minecraft:stripped_'+woodTypes+'_log',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })

    netherWoodTypes.forEach(netherWoodTypes => {
        event.shaped('2x storagedrawers:'+netherWoodTypes+'_half_drawers_4' , [
            'CWC',
            'BWB',
            'CWC'
        ], {
            W: 'minecraft:stripped_'+netherWoodTypes+'_stem',
            B: 'the_vault:gem_benitoite',
            C: '#forge:chests/wooden'
        })
    })
})