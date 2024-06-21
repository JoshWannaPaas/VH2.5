/* scripts made by a1qs
for Vault Hunters 2.5 */

let gemTypes = ['larimar', 'benitoite', 'wutodie', 'alexandrite', 'painite', 'black_opal']
let plankTypes = ['acacia', 'birch', 'crimson', 'dark_oak', 'jungle', 'oak', 'spruce', 'warped']
let vaultGear = ['the_vault:sword', 'the_vault:axe', 'the_vault:helmet', 'the_vault:chestplate', 'the_vault:leggings', 'the_vault:boots', 'the_vault:idol_benevolent', 'the_vault:idol_omniscient', 'the_vault:idol_timekeeper', 'the_vault:idol_malevolence']

// starting items

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('16x minecraft:cooked_beef')
        event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:the_vault_guide"}'))
    }
})

onEvent('block.right_click', event =>{
    if(event.block.id == 'the_vault:floating_text' && event.player.world.isOverworld()) {
        var bx = event.block.getX()
        var by = event.block.getY()
        var bz = event.block.getZ()

        event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} air`)
    }
})

onEvent('recipes', event => {

    event.shaped('the_vault_extras:cake_seal', [
        'ACA',
        'KVK',
        'ADA'
    ], {
        A: 'the_vault:perfect_alexandrite',
        K: 'the_vault:star_shard',
        V: Item.of('the_vault:vault_crystal', '{CrystalData:{Type:"TROVE"}}'),
        C: 'minecraft:cake',
        D: 'the_vault:vault_diamond_block'
    })

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

    event.shaped('the_vault:mod_box', [
        'EXE',
        'XDX',
        'EXE'
    ], {
        E: 'the_vault:vault_essence',
        X: 'the_vault:star_shard',
        D: 'the_vault:vault_diamond'
    })

    event.shaped('the_vault:pandoras_box', [
        'EXE',
        'XDX',
        'EXE'
    ], {
        E: 'the_vault:vault_essence',
        X: '#the_vault:commongems',
        D: 'the_vault:vault_diamond'
    })

    event.shaped('the_vault:artisan_scroll', [
        '   ',
        'SAS',
        '   '
    ], {
        S: 'the_vault:artisan_scroll',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('the_vault:crystal_seal_executioner', [
        'ASA',
        'DCD',
        'AEA'
    ], {
        A: 'the_vault:perfect_alexandrite',
        S: 'minecraft:wooden_sword',
        D: 'the_vault:skill_essence',
        E: 'the_vault:eternal_soul',
        C: 'the_vault:vault_crystal'
    })

    event.shaped('the_vault:crystal_seal_hunter', [
        'AMA',
        'DCD',
        'AEA'
    ], {
        A: 'the_vault:perfect_alexandrite',
        M: 'minecraft:red_mushroom',
        D: 'the_vault:skill_essence',
        E: 'the_vault:eternal_soul',
        C: 'the_vault:vault_crystal'
    })


    event.shapeless('4x the_vault:perfect_echo_gem', ['the_vault:extraordinary_echo_gem'])
    event.shapeless('4x the_vault:gem_echo', ['the_vault:perfect_echo_gem'])
    event.shapeless('9x the_vault:vault_dust', ['the_vault:vault_nugget']),
    event.shapeless('the_vault:vault_nugget', ['9x the_vault:vault_dust']),
    event.shapeless('9x the_vault:vault_nugget', ['the_vault:vault_ingot']),
    event.shapeless('the_vault:vault_ingot', ['9x the_vault:vault_nugget']),
    event.shapeless('9x architects_palette:twisted_boards', ['9x architects_palette:twisted_planks'])


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

    plankTypes.forEach(plankTypes => {
        event.shapeless(`9x architects_palette:${plankTypes}_boards`, [`9x minecraft:${plankTypes}_planks`])
    })

    vaultGear.forEach(vaultGear => {
        event.blasting('the_vault:vault_scrap', vaultGear, 1.0, 300)
    })
})