import crafttweaker.api.SmithingManager;
import crafttweaker.api.Brewing;
import crafttweaker.api.registries.IRecipeManager;
import mods.botania.ElvenTrade;
import crafttweaker.api.villagers.VillagerTrades;
import crafttweaker.api.tag.MCTag;

brewing.removeRecipeByOutputPotion(<potion:minecraft:healing>);
brewing.removeRecipeByOutputPotion(<potion:minecraft:regeneration>);
brewing.removeRecipeByOutputPotion(<potion:minecraft:turtle_master>);
brewing.removeRecipeByOutputPotion(<potion:quark:resistance>);

//<recipetype:create:mixing>.removeRecipe(<fluid:create:potion>.withTag({Potion: "minecraft:healing"}));
//<recipetype:create:mixing>.removeRecipe(<fluid:create:potion>.withTag({Potion: "minecraft:regeneration"}));
villagerTrades.removeAllTrades(<profession:immersiveengineering:gunsmith>, 1);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 1);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 2);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 3);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 4);
villagerTrades.removeAllTrades(<profession:immersiveengineering:machinist>, 5);