/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x dankstorage:dock', [
        'OPO',
        'P P',
        'OPO'
    ], {
        O: 'the_vault:gem_black_opal',
        P: 'the_vault:perfect_benitoite'
    })

    event.shaped('1x dankstorage:dank_1', [
        'NWN',
        'WCW',
        'NWN'
    ], {
        N: 'minecraft:netherite_ingot',
        W: 'the_vault:perfect_wutodie',
        C: 'the_vault:vault_crate_arena'
    })

    event.shaped('1x dankstorage:dank_2', [
        'VRV',
        'WDW',
        'VGV'
    ], {
        V: 'the_vault:vault_diamond',
        R: 'compressium:redstone_1',
        W: 'the_vault:perfect_wutodie',
        D: 'dankstorage:dank_1',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:dank_3', [
        'VGV',
        'WDW',
        'VPV'
    ], {
        V: 'the_vault:vault_diamond',
        G: 'compressium:gold_1',
        W: 'the_vault:perfect_wutodie',
        D: 'dankstorage:dank_2',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:dank_4', [
        'VEV',
        'WDW',
        'VGV'
    ], {
        V: 'the_vault:vault_diamond_block',
        E: 'compressium:emerald_1',
        W: 'the_vault:perfect_wutodie',
        D: 'dankstorage:dank_3',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:dank_5', [
        'VCV',
        'WDW',
        'VGV'
    ], {
        V: 'the_vault:vault_diamond_block',
        C: 'compressium:diamond_1',
        W: 'the_vault:perfect_wutodie',
        D: 'dankstorage:dank_4',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:dank_6', [
        'VOV',
        'PDP',
        'VEV'
    ], {
        V: 'the_vault:vault_diamond_block',
        O: 'compressium:obsidian_2',
        P: 'the_vault:perfect_black_opal',
        D: 'dankstorage:dank_5',
        E: 'the_vault:echo_pog'
    })

    event.shaped('1x dankstorage:dank_7', [
        'VNV',
        'EDE',
        'VOV'
    ], {
        V: 'the_vault:vault_diamond_block',
        N: 'minecraft:nether_star',
        E: 'the_vault:perfect_echo_gem',
        D: 'dankstorage:dank_6',
        O: 'the_vault:omega_pog'
    })

    event.shaped('1x dankstorage:1_to_2', [
        'VRV',
        'WGW',
        'VRV'
    ], {
        V: 'the_vault:vault_diamond',
        R: 'compressium:redstone_1',
        W: 'the_vault:perfect_wutodie',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:2_to_3', [
        'VGV',
        'WPW',
        'VGV'
    ], {
        V: 'the_vault:vault_diamond',
        G: 'compressium:gold_1',
        W: 'the_vault:perfect_wutodie',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:3_to_4', [
        'VEV',
        'WGW',
        'VEV'
    ], {
        V: 'the_vault:vault_diamond_block',
        E: 'compressium:emerald_1',
        W: 'the_vault:perfect_wutodie',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:4_to_5', [
        'VCV',
        'WGW',
        'VCV'
    ], {
        V: 'the_vault:vault_diamond_block',
        C: 'compressium:diamond_1',
        W: 'the_vault:perfect_wutodie',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x dankstorage:5_to_6', [
        'VOV',
        'PEP',
        'VOV'
    ], {
        V: 'the_vault:vault_diamond_block',
        O: 'compressium:obsidian_2',
        P: 'the_vault:perfect_black_opal',
        E: 'the_vault:echo_pog'
    })

    event.shaped('1x dankstorage:6_to_7', [
        'VNV',
        'EOE',
        'VNV'
    ], {
        V: 'the_vault:vault_diamond_block',
        N: 'minecraft:nether_star',
        E: 'the_vault:perfect_echo_gem',
        O: 'the_vault:omega_pog'
    })
})