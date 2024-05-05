/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by monkyman64 to KubeJS */

let vaultApples = ['jade_apple','cobalt_apple', 'pixie_apple', 'lucky_apple', 'treasure_apple', 'power_apple', 'ghost_apple', 'golem_apple', 'sweet_apple', 'hearty_apple']

onEvent('recipes', event => {

	event.shaped('immersiveengineering:cloche', [
		'GEG',
		'GPG',
		'TCT' 
	], {
		G: '#forge:glass',
		E: 'immersiveengineering:electron_tube',
		P: 'the_vault:echo_pog',
		T: '#forge:treated_wood',
        C: 'immersiveengineering:component_iron'
	})

  	

    event.shaped('immersiveengineering:turret_chem', [
		'BSP',
		'LFC',
		'MTE' 
	], {
		B: 'the_vault:perfect_benitoite',
		S: 'immersiveengineering:toolupgrade_railgun_scope',
		P: 'the_vault:gem_pog',
        L: 'the_vault:perfect_larimar',
		F: 'immersiveengineering:chemthrower',
		C: 'immersiveengineering:circuit_board',
        M: 'immersiveengineering:metal_barrel',
		T: 'immersiveengineering:turntable',
		E: 'immersiveengineering:rs_engineering'
	})

	event.shaped('immersiveengineering:turret_gun', [
		'BSP',
		'LRC',
		'MTE' 
	], {
        B: 'the_vault:perfect_benitoite',
        S: 'immersiveengineering:toolupgrade_railgun_scope',
        P: 'the_vault:gem_pog',
        L: 'the_vault:perfect_larimar',
        R: 'immersiveengineering:revolver',
        C: 'immersiveengineering:circuit_board',
        M: 'immersiveengineering:toolupgrade_revolver_magazine',
        T: 'immersiveengineering:turntable',
        E: 'immersiveengineering:rs_engineering'
	})

	event.shaped('immersiveengineering:chemthrower', [
		'BSG',
		'LDG',
		'MTE' 
	], {
        B: 'the_vault:perfect_benitoite',
        S: 'immersiveengineering:toolupgrade_railgun_scope',
        G: 'immersiveengineering:wooden_grip',
        L: 'the_vault:perfect_larimar',
        D: 'immersiveengineering:toolupgrade_drill_waterproof',
        M: 'immersiveengineering:fluid_pipe',
        T: 'the_vault:infinite_water_bucket',
        E: '#the_vault:perfectcommongems'
    })

	event.shaped('immersiveengineering:steel_scaffolding_standard', [
		'III',
		'GSG',
		'SGS' 
	], {
		I: '#forge:ingots/steel',
		G: '#the_vault:perfectcommongems',
		S: 'immersiveengineering:stick_steel'
	})

	event.shaped('immersiveengineering:capacitor_lv', [
		'III',
		'CLC',
		'GRG' 
	], {
		I: 'minecraft:iron_block',
		C: '#forge:ingots/copper',
		L: '#forge:ingots/lead',
		G: '#the_vault:perfectcommongems',
        R: 'minecraft:redstone_block'
	})

	event.shaped('immersiveengineering:capacitor_mv', [
		'III',
		'ACA',
		'WRW' 
	], {
		I: 'compressium:iron_1',
		A: '#forge:ingots/aluminum',
		C: 'immersiveengineering:capacitor_lv',
		W: 'the_vault:perfect_wutodie',
        R: 'compressium:redstone_1'
	})

	event.shaped('immersiveengineering:capacitor_hv', [
		'SSS',
		'ECE',
		'ORO' 
	], {
		S: 'immersiveengineering:storage_steel',
		E: '#forge:ingots/electrum',
		C: 'immersiveengineering:capacitor_mv',
		O: 'the_vault:perfect_black_opal',
        R: 'compressium:redstone_2'
	})

	event.shaped('2x immersiveengineering:light_engineering', [
		'SIS',
		'GCG',
		'SIS' 
	], {
		S: 'immersiveengineering:sheetmetal_iron',
		I: 'immersiveengineering:component_iron',
		G: '#the_vault:perfectcommongems',
		C: '#forge:ingots/copper'
	})

	event.shaped('2x immersiveengineering:heavy_engineering', [
		'SCS',
		'WLW',
		'SCS' 
	], {
		S: 'immersiveengineering:sheetmetal_steel',
		C: 'immersiveengineering:component_steel',
		W: 'the_vault:perfect_wutodie',
		L: 'immersiveengineering:light_engineering'
	})

	event.shaped('2x immersiveengineering:rs_engineering', [
		'SRS',
		'GCG',
		'SRS' 
	], {
		S: 'immersiveengineering:sheetmetal_iron',
		R: 'minecraft:redstone_block',
		G: '#the_vault:perfectcommongems',
		C: '#forge:ingots/copper'
	})

	event.shaped('immersiveengineering:dynamo', [
		'G G',
		'RCR',
		'III' 
	], {
		G: '#the_vault:perfectcommongems',
		R: 'minecraft:redstone_block',
		C: 'immersiveengineering:coil_lv',
		I: '#forge:ingots/iron'
	})

	event.shaped('immersiveengineering:thermoelectric_generator', [
		'SOS',
		'PCP',
		'PPP' 
	], {
		S: 'immersiveengineering:ingot_steel',
		O: 'the_vault:perfect_black_opal',
		P: '#forge:plates/constantan',
		C: 'immersiveengineering:coil_lv'
	})

	event.shaped('6x immersiveengineering:treated_wood_horizontal', [
		'PPP',
		'GCG',
		'PPP' 
	], {
		P: '#minecraft:planks',
		G: '#the_vault:perfectcommongems',
		C: 'immersiveengineering:creosote_bucket'
	})

	event.shaped('2x immersiveengineering:blastbrick', [
		'RBR',
		'OMO',
		'RBR' 
	], {
		R: 'minecraft:red_nether_bricks',
		B: 'minecraft:bricks',
		O: 'the_vault:gem_black_opal',
		M: 'quark:magma_bricks'
	})

	event.shaped('2x immersiveengineering:cokebrick', [
		'RCR',
		'WSW',
		'RCR' 
	], {
		R: 'minecraft:red_nether_bricks',
		C: 'compressium:clay_1',
		W: 'the_vault:perfect_wutodie',
		S: 'byg:pink_sandstone'
	})

	event.shaped('immersiveengineering:hammer', [
		' PC',
		' RG',
		'R  ' 
	], {
		P: 'the_vault:echo_pog',
		C: '#ag:crafter',
		R: '#forge:rods/wooden',
		G: 'the_vault:gem_pog'
	})

	event.shaped(Item.of('immersiveengineering:hammer', '{Damage:0,multiblockInterdiction:["immersiveengineering:multiblocks/assembler"]}'), [
		' IS',
		' RI',
		'R  ' 
	], {
		I: '#forge:ingots/iron',
		S: '#forge:string',
		R: '#forge:rods/wooden',
	})

    event.shapeless('immersiveengineering:blastbrick_reinforced', ['immersiveengineering:blastbrick', 'immersiveengineering:plate_steel', 'the_vault:perfect_wutodie'])

	event.custom({
		"type": "immersiveengineering:crusher",
		"secondaries":[],
    	"result":{"item":"minecraft:nether_wart", "count": 4},
    	"input":{"item":"minecraft:nether_wart_block"},
    	"energy":1600
	})

	vaultApples.forEach(vaultApples =>{
        event.custom({
            "type": "immersiveengineering:crusher",
			"secondaries":[],
    		"result":{"item":"the_vault:vault_apple"},
    		"input":{"item":"the_vault:"+vaultApples},
    		"energy":1600
        })
    })
})