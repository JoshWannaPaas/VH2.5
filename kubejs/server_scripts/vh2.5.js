/* scripts made by a1qs
for Vault Hunters 2.5 */

let gemTypes = ['larimar', 'benitoite', 'wutodie', 'alexandrite', 'painite', 'black_opal']

// starting items

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('16x minecraft:cooked_beef')
        event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:the_vault_guide"}'))
    }
})

onEvent('recipes', event => {

    event.shaped(Item.of('the_vault:vault_paxel', '{Damage:0,ShouldEnhance:0b,Enhancement:{Id:"the_vault:fortunate"},display:{Name:\'["",{"text":"Fortunate Paxel","italic":false,"color":"#ffb31a","bold":true}]\'}}') , [
        'PCP',
        'EVE',
        'PCP'
    ], {
        P: 'the_vault:vault_paxel',
        C: 'the_vault:paxel_charm',
        E: 'the_vault:echo_pog',
        V: 'the_vault:vault_diamond_block'
    })

    //temp recipes, up to debate
    event.shaped(Item.of('the_vault:reset_flask', '{Skillable:"Artisan"}') , [
        'OPE',
        'PFP',
        'EPO'
    ], {
        O: 'the_vault:omega_pog',
        P: 'the_vault:vault_platinum',
        E: 'the_vault:extraordinary_echo_gem',
        F: 'the_vault:reset_flask'
    })

    event.shaped(Item.of('the_vault:reset_flask', '{Skillable:"Treasure Hunter"}') , [
        'EPO',
        'PFP',
        'OPE'
    ], {
        O: 'the_vault:omega_pog',
        P: 'the_vault:vault_platinum',
        E: 'the_vault:extraordinary_echo_gem',
        F: 'the_vault:reset_flask'
    })

    event.shaped('the_vault:charm_upgrade_tier_4', [
        ' U ',
        'UOU'
    ], {
        U: 'the_vault:charm_upgrade_tier_3',
        O: 'the_vault:omega_pog'
    })

    event.shaped('the_vault:extraordinary_echo_gem', [
        'PP ',
        'PP '
    ], {
        P: 'the_vault:perfect_echo_gem'
    })

    event.shapeless('4x the_vault:perfect_echo_gem', ['the_vault:extraordinary_echo_gem']),
    event.shapeless('4x the_vault:gem_echo', ['the_vault:perfect_echo_gem'])


    gemTypes.forEach(gemTypes =>{
        event.shaped('the_vault:extraordinary_'+gemTypes, [
            'PP ',
            'PP '
        ], {
            P: 'the_vault:perfect_'+gemTypes
        })

        event.shapeless('4x the_vault:perfect_'+gemTypes, ['the_vault:extraordinary_'+gemTypes]),
        event.shapeless('4x the_vault:gem_'+gemTypes, ['the_vault:perfect_'+gemTypes])
    })


    
    
})