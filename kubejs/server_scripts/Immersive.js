/* scripts made by Douwsky
for Iskall85's Vaulthunters */

onEvent('recipes', event => {
   

// adding recipes
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

  	event.shapeless('9x immersiveengineering:nugget_electrum', ['immersiveengineering:ingot_electrum'])

  	event.shapeless('9x immersiveengineering:nugget_steel', ['immersiveengineering:ingot_steel'])

  	event.shapeless('9x immersiveengineering:nugget_constantan', ['immersiveengineering:ingot_constantan'])

  	event.shapeless('9x immersiveengineering:nugget_uranium', ['immersiveengineering:ingot_uranium'])

  	event.shapeless('9x immersiveengineering:nugget_nickel', ['immersiveengineering:ingot_nickel'])

  	event.shapeless('9x immersiveengineering:nugget_silver', ['immersiveengineering:ingot_silver'])

  	event.shapeless('9x immersiveengineering:nugget_lead', ['immersiveengineering:ingot_lead'])

  	event.shapeless('9x immersiveengineering:nugget_copper', ['immersiveengineering:ingot_copper'])
	
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
        P: 'immersiveengineering:wooden_grip',
        L: 'the_vault:perfect_larimar',
        D: 'immersiveengineering:toolupgrade_drill_waterproof',
        M: 'immersiveengineering:fluid_pipe',
        T: 'the_vault:infinite_water_bucket',
        E: '#the_vault:perfectcommongems'
     })

	event.shaped('immersiveengineering:storage_steel', [
			'III',
			'III',
			'III' 
	 ], {
		 I: 'immersiveengineering:ingot_steel'
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
		 G: '#the_vault:perfectcommongem',
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
		 C: '#items:forge:ingots/copper'
	 })

	event.shaped('immersiveengineering:dynamo', [
			'G G',
			'RCR',
			'III' 
	 ], {
		 G: 'the_vault:perfectcommongems',
		 R: 'minecraft:redstone_block',
		 C: 'immersiveengineering:coil_lv',
		 I: 'items:forge:ingots/iron'
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

    event.shapeless('immersiveengineering:blastbrick_reinforced', ['immersiveengineering:blastbrick', 'immersiveengineering:plate_steel', 'the_vault:perfect_wutodie'])

/*    
<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_jade", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:jade_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_cobalt", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:cobalt_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_pixie", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:pixie_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_lucky", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:lucky_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_treasure", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:treasure_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_power", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:power_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_ghost", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:ghost_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_golem", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:golem_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_sweet", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:sweet_apple"},
    "energy":1600
});

<recipetype:immersiveengineering:crusher>.addJSONRecipe("vault_apple_hearty", { 
    "secondaries":[],
    "result":{"item":"the_vault:vault_apple"},
    "input":{"item":"the_vault:hearty_apple"},
    "energy":1600
});

craftingTable.addShaped("restrictediehammer", <item:immersiveengineering:hammer>.withTag({multiblockInterdiction: ["immersiveengineering:multiblocks/assembler"]}), [
 [<item:minecraft:air>, <tag:items:forge:ingots/iron>, <tag:items:forge:string>],
 [<item:minecraft:air>, <tag:items:forge:rods/wooden>, <tag:items:forge:ingots/iron>],
 [<tag:items:forge:rods/wooden>, <item:minecraft:air>, <item:minecraft:air>]
 ]);
*/

	event.shaped('immersiveengineering:hammer', [
			' PC',
			' RG',
			'R  ' 
	 ], {
		 P: 'the_vault:echo_pog',
		 C: 'ag:crafter',
		 R: '#forge:rods/wooden',
		 G: 'the_vault:gem_pog'
	 })

/*
<recipetype:immersiveengineering:crusher>.addRecipe("nether_wart",
 <item:minecraft:nether_wart_block>, 2500,
 <item:minecraft:nether_wart> * 4);
*/
})