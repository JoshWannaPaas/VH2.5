/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {
    
    event.shaped('1x buildinggadgets:gadget_building', [
        'PRP',
        'VGV',
        'PAP'
    ], {
        P: '#the_vault:perfectcommongems',
        R: 'compressium:redstone_1',
        V: 'the_vault:vault_diamond',
        G: 'the_vault:gem_pog',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('1x buildinggadgets:gadget_exchanging', [
        'LRL',
        'DGD',
        'LAL'
    ], {
        L: 'the_vault:gem_larimar',
        R: 'minecraft:redstone',
        D: 'minecraft:diamond',
        G: 'buildinggadgets:gadget_building',
        A: 'minecraft:lapis_lazuli'
    })

    event.shaped('1x buildinggadgets:gadget_destruction', [
        'PRA',
        'OGO',
        'AEP'
    ], {
        P: 'the_vault:perfect_painite',
        R: 'minecraft:redstone',
        A: 'the_vault:perfect_alexandrite',
        O: 'the_vault:perfect_black_opal',
        G: 'the_vault:gem_pog',
        E: 'buildinggadgets:gadget_exchanging'
    })
    
    event.shaped('1x buildinggadgets:gadget_copy_paste', [
        'VRV',
        'OGO',
        'WBW'
    ], {
        V: 'the_vault:vault_diamond_block',
        R: 'compressium:redstone_3',
        O: 'the_vault:perfect_black_opal',
        G: 'the_vault:gem_pog',
        W: 'the_vault:perfect_wutodie',
        B: 'buildinggadgets:gadget_building'
    })
})