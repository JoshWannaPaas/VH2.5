/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('8x prettypipes:pipe', [
        ' B ',
        ' R ',
        'QGQ'
    ], {
        B: 'the_vault:gem_benitoite',
        R: 'minecraft:redstone_block',
        Q: 'quark:grate',
        G: '#forge:glass'
    })

    event.shaped('3x prettypipes:blank_module', [
        'GPG',
        'PPP',
        'GPG'
    ], {
        G: 'the_vault:gem_larimar',
        P: 'prettypipes:pipe'
    })

    event.shaped('3x prettypipes:blank_module', [
        'GPG',
        'PPP',
        'GPG'
    ], {
        G: 'the_vault:gem_benitoite',
        P: 'prettypipes:pipe'
    })

    event.shaped('1x prettypipes:item_terminal', [
        'GPG',
        'ECR',
        'GPG'
    ], {
        G: '#the_vault:perfectcommongems',
        P: 'minecraft:ender_pearl',
        E: 'prettypipes:high_extraction_module',
        C: '#forge:chests/wooden',
        R: 'prettypipes:high_retrieval_module'
    })

    event.shaped('1x prettypipes:pressurizer', [
        'WSW',
        'SRS',
        'ISI'
    ], {
        W: 'the_vault:perfect_wutodie',
        S: 'prettypipes:high_extraction_module',
        R: 'minecraft:redstone_block',
        I: 'minecraft:iron_block'
    })

    event.shaped('1x prettypipes:high_speed_module', [
        'GVG',
        'VSV',
        'GVG'
    ], {
        G: 'minecraft:gold_block',
        V: 'the_vault:vault_nugget',
        S: 'prettypipes:medium_speed_module'
    })

    event.shaped('1x prettypipes:crafting_terminal', [
        'APA',
        'VSV',
        'ATA'
    ], {
        A: 'the_vault:perfect_alexandrite',
        P: 'the_vault:gem_pog',
        V: 'the_vault:vault_nugget',
        S: 'prettypipes:medium_speed_module',
        T: 'prettypipes:item_terminal'
    })
})