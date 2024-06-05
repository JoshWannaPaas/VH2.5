import crafttweaker.api.SmithingManager;
import crafttweaker.api.Brewing;
import crafttweaker.api.registries.IRecipeManager;
import mods.botania.ElvenTrade;
import crafttweaker.api.villagers.VillagerTrades;
import crafttweaker.api.tag.MCTag;

brewing.removeRecipeByOutputPotion(<potion:minecraft:turtle_master>);
brewing.removeRecipeByOutputPotion(<potion:quark:resistance>);

villagerTrades.removeAllTrades(<profession:immersiveengineering:gunsmith>, 1);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 1);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 2);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 3);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 4);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 5);

brewing.removeRecipeByOutputPotion(<potion:minecraft:healing>);
brewing.removeRecipeByOutputPotion(<potion:minecraft:regeneration>);
brewing.removeRecipeByOutputPotion(<potion:minecraft:turtle_master>);
craftingTable.removeRecipe(<item:minecraft:golden_apple>);

// adding stuff that doesnt work in KubeJS

// potions
craftingTable.addShaped("goldenapple", <item:minecraft:golden_apple>, [
    [<item:minecraft:gold_block>, <item:minecraft:gold_block>, <item:minecraft:gold_block>],
    [<item:minecraft:gold_block>, <item:minecraft:apple>, <item:minecraft:gold_block>],
    [<item:minecraft:gold_block>, <item:minecraft:gold_block>, <item:minecraft:gold_block>]
]);

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

<recipetype:create:mixing>.addRecipe("mixing_healing_potion", "heated",<fluid:create:potion>.withTag({Potion: "minecraft:healing", Bottle:"REGULAR"}) *1000, [
    <item:minecraft:golden_apple>,], [<fluid:create:potion>.withTag({Potion: "minecraft:awkward", Bottle:"REGULAR"}) *1000]);

<recipetype:create:mixing>.addRecipe("mixing_healing_potion_2", "heated",<fluid:create:potion>.withTag({Potion: "minecraft:strong_healing", Bottle:"REGULAR"}) *1000, [
    <item:minecraft:glowstone_dust>,], [<fluid:create:potion>.withTag({Potion: "minecraft:healing", Bottle:"REGULAR"}) *1000]);

<recipetype:create:mixing>.addRecipe("mixing_regen_potion", "heated",<fluid:create:potion>.withTag({Potion: "minecraft:regeneration", Bottle:"REGULAR"}) *1000, [
    <item:the_vault:vault_essence>,], [<fluid:create:potion>.withTag({Potion: "minecraft:awkward", Bottle:"REGULAR"}) *1000]);

<recipetype:create:mixing>.addRecipe("mixing_regen_potion_2", "heated",<fluid:create:potion>.withTag({Potion: "minecraft:strong_regeneration", Bottle:"REGULAR"}) *1000, [
    <item:minecraft:glowstone_dust>,], [<fluid:create:potion>.withTag({Potion: "minecraft:regeneration", Bottle:"REGULAR"}) *1000]);



//trades
villagerTrades.addWanderingTrade(1, 4, <item:byg:embur_nylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:sythian_nylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:sythian_stalk_block>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:overgrown_netherrack>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:wailing_nylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:wailing_bell_blossom>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:warped_cactus>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:withering_oak_sapling>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:lament_sapling>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:lament_vine>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:mycelium_netherrack>, 4, 2);

villagerTrades.addWanderingTrade(1, 4, <item:byg:oddity_cactus>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:purple_bulbis_oddity>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:bulbis_oddity>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:ivis_phylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:imparius_phylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:imparius_mushroom>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:ether_phylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:ether_sapling>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:bulbis_phycelium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:nightshade_phylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:nightshade_sapling>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:shulkren_phylium>, 4, 2);
villagerTrades.addWanderingTrade(1, 4, <item:byg:vermilion_sculk>, 4, 2);

villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 1, 5, <item:immersiveengineering:hammer>.withTag({multiblockInterdiction: ["immersiveengineering:multiblocks/assembler"]}), 12, 1, 0.2);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 1, <item:immersiveengineering:coal_coke> * 8, <item:minecraft:air>, <item:minecraft:emerald>, 16, 2, 0.05);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 1, 1, <item:immersiveengineering:component_iron>, 12, 2, 0.1);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 2, <item:immersiveengineering:ingot_aluminum> * 5, <item:minecraft:emerald>, 12, 5, 0.05);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 2, <item:immersiveengineering:ingot_copper> * 5, <item:minecraft:emerald>, 12, 5, 0.05);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 2, 2, <item:immersiveengineering:component_steel>, 12, 3, 0.1);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 3, 7, <item:immersiveengineering:toolbox>, 12, 5, 0.1);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 3, 2, <item:immersiveengineering:waterwheel_segment>, 12, 1, 0.1);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 4, 35, <item:immersiveengineering:drillhead_iron>, 12, 3, 0.1);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 4, 7, <item:immersiveengineering:earmuffs>, 12, 2, 0.1);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 5, 40, <item:immersiveengineering:drillhead_steel>, 12, 2, 0.1);
villagerTrades.addTrade(<profession:immersiveengineering:machinist>, 5, 5, <item:immersiveengineering:blueprint>.withTag({blueprint:"electrode"}), 12, 1, 0.1);