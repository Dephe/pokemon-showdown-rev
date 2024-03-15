// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [	
{		section: "Other Metagames",
		column: 2,
	},
	{
	name: "[Gen 3] RS 200",
		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Freeze Clause Mod', 'hoennpokedex'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger', 'Jirachi', 'Metagross + Explosion'],
	},
		{
		name: "[Gen 5] Random Battlex",

		mod: 'gen5',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
	},
];