/* scripts made by a1qs
for Vault Hunters 2.5 */

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
    
})