/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x fluxnetworks:flux_block', [
        'DCD',
        'CNC',
        'DCD'
    ], {
        D: 'fluxnetworks:flux_dust',
        C: 'fluxnetworks:flux_core',
        N: 'the_vault:vault_nugget'
    })

    event.shaped('1x fluxnetworks:basic_flux_storage', [
        'SSS',
        'GOG',
        'SSS'
    ], {
        S: 'fluxnetworks:flux_block',
        G: '#forge:glass_panes',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x fluxnetworks:herculean_flux_storage', [
        'SSS',
        'GPG',
        'SSS'
    ], {
        S: 'fluxnetworks:basic_flux_storage',
        G: '#forge:glass_panes',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x fluxnetworks:gargantuan_flux_storage', [
        'SSS',
        'GPG',
        'SSS'
    ], {
        S: 'fluxnetworks:herculean_flux_storage',
        G: '#forge:glass_panes',
        P: 'the_vault:omega_pog'
    })

    event.shaped('1x fluxnetworks:flux_plug', [
        'WCD',
        'CPC',
        'DCW'
    ], {
        W: 'the_vault:perfect_wutodie',
        C: 'fluxnetworks:flux_core',
        D: 'the_vault:vault_diamond_block',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x fluxnetworks:flux_point', [
        'DCP',
        'COC',
        'PCD'
    ], {
        D: 'the_vault:vault_diamond',
        C: 'fluxnetworks:flux_core',
        P: '#the_vault:perfectcommongems',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x fluxnetworks:flux_controller', [
        'FCF',
        'POG',
        'FFF'
    ], {
        F: 'fluxnetworks:flux_block',
        C: 'fluxnetworks:flux_core',
        P: 'fluxnetworks:flux_point',
        O: 'the_vault:omega_pog',
        G: 'fluxnetworks:flux_plug'
    })
})