/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x ironjetpacks:strap', [
        ' N ',
        'BBB',
        ' N '
    ], {
        N: `the_vault:vault_nugget`,
        B: 'quark:bonded_leather'
    })

    event.shaped('1x ironjetpacks:basic_coil', [
        ' GR',
        'GOG',
        'RG '
    ], {
        G: 'the_vault:gem_benitoite',
        R: 'minecraft:redstone',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x ironjetpacks:advanced_coil', [
        ' GR',
        'GCG',
        'RG '
    ], {
        G: 'the_vault:perfect_wutodie',
        R: 'minecraft:redstone_block',
        C: 'ironjetpacks:basic_coil'
    })

    event.shaped('1x ironjetpacks:elite_coil', [
        ' GR',
        'GCG',
        'RG '
    ], {
        G: 'the_vault:perfect_black_opal',
        R: 'compressium:redstone_2',
        C: 'ironjetpacks:advanced_coil'
    })
})