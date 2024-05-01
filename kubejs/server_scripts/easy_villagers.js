/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x easy_villagers:trader', [
        'BBB',
        'BEB',
        'IOI'
    ], {
        B: 'the_vault:perfect_benitoite',
        E: 'compressium:emerald_1',
        I: 'compressium:iron_1',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x easy_villagers:iron_farm', [
        'BBB',
        'BOB',
        'IEI'
    ], {
        B: 'the_vault:perfect_benitoite',
        E: 'the_vault:perfect_echo_gem',
        I: 'compressium:iron_2',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x easy_villagers:breeder', [
        'BBB',
        'BEB',
        'IPI'
    ], {
        B: 'the_vault:perfect_benitoite',
        E: '#minecraft:beds',
        I: 'compressium:iron_1',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x easy_villagers:converter', [
        'BBB',
        'BRB',
        'IPI'
    ], {
        B: 'the_vault:perfect_benitoite',
        R: 'minecraft:rotten_flesh',
        I: 'compressium:iron_1',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x easy_villagers:farmer', [
        'BBB',
        'BSB',
        'IPI'
    ], {
        B: 'the_vault:perfect_benitoite',
        S: '#forge:seeds',
        I: 'compressium:iron_1',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x easy_villagers:auto_trader', [
        'BNB',
        'BTB',
        'IEI'
    ], {
        B: 'the_vault:perfect_benitoite',
        N: 'minecraft:netherite_block',
        T: 'easy_villagers:trader',
        I: 'compressium:iron_2',
        E: 'the_vault:echo_pog'
    })
})