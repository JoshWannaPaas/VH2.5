/* scripts made by Douwsky
for Iskall85's Vaulthunters */

onEvent('recipes', event => {

    // adding recipes
/*
brewing.addRecipe(<item:minecraft:potion>.withTag({Potion: "minecraft:healing"}), <item:minecraft:golden_apple>, <item:minecraft:potion>.withTag({Potion: "minecraft:awkward"}));

brewing.addRecipe(<item:minecraft:potion>.withTag({Potion: "minecraft:regeneration"}), <item:the_vault:vault_essence>, <item:minecraft:potion>.withTag({Potion: "minecraft:awkward"}));

brewing.addRecipe(<item:minecraft:splash_potion>.withTag({Potion: "minecraft:splash_healing"}), <item:minecraft:golden_apple>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:awkward"}));

brewing.addRecipe(<item:minecraft:splash_potion>.withTag({Potion: "minecraft:splash_regeneration"}), <item:the_vault:vault_essence>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:awkward"}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:night_vision"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:night_vision" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_night_vision"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:night_vision" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:invisibility"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:invisibility" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_invisibility"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:invisibility" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:leaping"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:leaping" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_leaping"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:leaping" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_leaping"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_leaping" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:fire_resistance"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:night_vision" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_fire_resistance"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:fire_resistance" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:swiftness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:swiftness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_swiftness"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:swiftness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_swiftness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_swiftness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slowness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:slowness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_slowness"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slowness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_slowness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_slowness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:water_breathing"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:water_breathing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_water_breathing"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:water_breathing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:healing"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:healing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_healing"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_healing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:harming"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:harming" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_harming"}), <item:the_vault:gem_pog>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_harming" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:poison"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:poison" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_poison"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:poison" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_poison"}), <item:the_vault:gem_pog>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_poison" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:regeneration"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:regeneration" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_regeneration"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:regeneration" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_regeneration"}), <item:the_vault:gem_pog>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_regeneration" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strength"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strength" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_strength"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strength" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_strength"}), <item:the_vault:gem_pog>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_strength" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:weakness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:weakness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_weakness"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:weakness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:luck"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:luck" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slow_falling"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:slow_falling" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_slow_falling"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slow_falling" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:resilience"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "quark:resilience" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:long_resilience"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "quark:resilience" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:strong_resilience"}), <item:the_vault:gem_pog>, <item:minecraft:lingering_potion>.withTag({Potion: "quark:strong_resilience" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:resistance"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "quark:resistance" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:long_resistance"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "quark:resistance" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:strong_resistance"}), <item:the_vault:gem_pog>, <item:minecraft:lingering_potion>.withTag({Potion: "quark:strong_resistance" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:danger_sight"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "quark:danger_sight" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "quark:long_danger_sight"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "quark:danger_sight" as string}));
*/

	event.shaped('minecraft:shield', [
			'BGB',
			'BBB',
			' O ' 
	 ], {
		 B: 'quark:biotite_block',
		 G: 'the_vault:perfect_painite',
		 B: 'minecraft:oak_log'
	 })


     event.shaped('minecraft:shield', [
         'BGB',
         'BBB',
         ' O ' 
    ], {
         B: 'quark:biotite_block',
         G: 'the_vault:perfect_alexandrite',
         B: 'minecraft:oak_log'
     })


	event.shaped('minecraft:iron_horse_armor', [
			'  I',
			'III',
			'G G' 
	 ], {
		 I: 'minecraft:iron_ingot',
		 G: 'the_vault:perfect_painite'
	 })

	event.shaped('minecraft:golden_horse_armor', [
			'  I',
			'III',
			'G G' 
	 ], {
		 I: 'minecraft:gold_ingot',
		 G: 'the_vault:perfect_alexandrite'
	 })


	event.shaped('minecraft:diamond_horse_armor', [
			'  I',
			'III',
			'G G' 
	 ], {
		 I: 'minecraft:diamond_block',
		 G: 'the_vault:perfect_black_opal'
	 })

	event.shaped('minecraft:golden_apple', [
			'GGG',
			'GAG',
			'GGG' 
	 ], {
		 G: 'minecraft:gold_block',
		 A: 'minecraft:apple'
	 })

	event.shaped('minecraft:dragon_head', [
			'OEO',
			'GWG',
			'OOO' 
	 ], {
		 O: 'crying_obsidian',
		 E: 'minecraft:ender_eye',
		 G: 'the_vault:gem_wutodie',
		 W: 'minecraft:wither_skeleton_skull'
	 })

	event.shaped('minecraft:nautilus_shell', [
			'QBQ',
			'BRB',
			'QBQ' 
	 ], {
		 Q: 'minecraft:quartz',
		 B: 'the_vault:gem_benitoite',
		 R: 'minecraft:rotten_flesh'
	 })

	event.shaped('minecraft:heart_of_the_sea', [
			' B ',
			'BDB',
			' B ' 
	 ], {
		 B: 'the_vault:perfect_benitoite',
		 D: 'minecraft:diamond_block'
	 })

	event.shaped('minecraft:phantom_membrane', [
			' L ',
			'LQL',
			' L ' 
	 ], {
	 	 L: 'the_vault:gem_larimar',
		 Q: 'minecraft:quartz'
	 })

	event.shaped('minecraft:trident', [
			'LLL',
			' N ',
			' B ' 
	 ], {
		 L: 'the_vault:gem_larimar',
		 N: 'netherite_ingot',
		 B: 'the_vault:perfect_benitoite'
	 })

	event.shaped('minecraft:turtle_egg', [
			' L ',
			'LEL',
			' L ' 
	 ], {
		 L: 'the_vault:gem_larimar',
		 E: 'minecraft:egg'
	 })

	event.shaped('minecraft:music_disc_11', [
			' W ',
			'WBW',
			' W ' 
	 ], {
		 W: 'the_vault:gem_wutodie',
		 B: 'the_vault:perfect_black_opal'
	 })

	event.shaped('minecraft:honeycomb', [
			' A ',
			'AHA',
			' A ' 
	 ], {
		 A: 'the_vault:gem_alexandrite',
		 H: 'minecraft:honey_block'
	 })

/*
craftingTable.addShapeless("suspicious_regen_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 10 as byte, EffectDuration: 160 as int}]}), [
    <item:the_vault:vault_essence>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_weaknes_red_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:red_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_weaknes_orange_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:orange_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_weaknes_white_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:white_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_weaknes_pink_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:pink_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_fire_res_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 12 as byte, EffectDuration: 80 as int}]}), [
    <item:minecraft:allium>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_wither_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 12 as byte, EffectDuration: 80 as int}]}), [
    <item:minecraft:wither_rose>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_blindness_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 15 as byte, EffectDuration: 160 as int}]}), [
    <item:minecraft:azure_bluet>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_nightvision_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 16 as byte, EffectDuration: 100 as int}]}), [
    <item:minecraft:poppy>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_saturation_dandelion_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 23 as byte, EffectDuration: 7 as int}]}), [
    <item:minecraft:dandelion>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_saturation_orchid_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 23 as byte, EffectDuration: 7 as int}]}), [
    <item:minecraft:blue_orchid>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_jump_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 8 as byte, EffectDuration: 120 as int}]}), [
    <item:minecraft:cornflower>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_poison_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 19 as byte, EffectDuration: 240 as int}]}), [
    <item:minecraft:lily_of_the_valley>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);
*/
        event.shapeless('minecraft:yellow_shulker_box', [#forge:shulker_boxes, minecraft:yellow_dye])

        event.shapeless('minecraft:blue_shulker_box', [#forge:shulker_boxes, minecraft:blue_dye])

        event.shapeless('minecraft:red_shulker_box', [#forge:shulker_boxes, minecraft:red_dye])

        event.shapeless('minecraft:green_shulker_box', [#forge:shulker_boxes, item:minecraft:green_dye])

    })