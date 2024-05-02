/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

let cableDyes = ['yellow', 'red', 'green', 'blue',]

onEvent('recipes', event => {

    event.shaped('1x xnet:controller', [
        'RPC',
        'EFE',
        'IGI'
    ], {
        R: 'minecraft:repeater',
        P: 'the_vault:perfect_black_opal',
        C: 'minecraft:comparator',
        E: 'minecraft:redstone_block',
        F: 'rftoolsbase:machine_frame',
        I: 'minecraft:iron_block',
        G: 'minecraft:gold_block'
    })

    event.shaped('1x xnet:router', [
        'RPR',
        'EFE',
        'IWI'
    ], {
        R: 'minecraft:powered_rail',
        P: 'the_vault:perfect_black_opal',
        E: 'minecraft:redstone_block',
        F: 'rftoolsbase:machine_frame',
        I: 'minecraft:iron_block',
        W: 'quark:ender_watcher'
    })

    event.shaped('1x xnet:wireless_router', [
        'CPC',
        'EFE',
        'WEW'
    ], {
        C: 'minecraft:comparator',
        P: 'the_vault:perfect_black_opal',
        E: 'minecraft:redstone_block',
        F: 'rftoolsbase:machine_frame',
        W: 'quark:ender_watcher'
    })

    event.shaped('7x xnet:netcable_routing', [
        'QBQ',
        'AGO',
        'QWQ'
    ], {
        Q: 'quark:white_quilted_wool',
        B: 'minecraft:black_dye',
        A: 'the_vault:perfect_alexandrite',
        G: 'minecraft:gold_block',
        O: 'the_vault:perfect_black_opal',
        W: 'the_vault:perfect_wutodie'
    })

    cableDyes.forEach(cableDyes =>{
        event.shapeless('1x xnet:netcable_'+cableDyes, ['#xnet:cables', 'minecraft:'+cableDyes+'_dye'])
        event.shapeless('1x xnet:connector_'+cableDyes, ['#xnet:connectors', 'minecraft:'+cableDyes+'_dye'])
        
        event.shaped('1x xnet:connector_'+cableDyes, [
            'CBC',
            'RNR',
            'CRC'
        ], {
            C: 'minecraft:'+cableDyes+'_concrete_powder',
            B: 'minecraft:'+cableDyes+'_shulker_box',
            R: 'minecraft:redstone_block',
            N: 'xnet:netcable_routing'
        })
    })
})