const FR = ["Banana", "Orange", "Apple", "Mango"];
const FR5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const AG = [3, 30, 18, 20];

const GROUPS = {
    search: "Որոնել և ստուգել",
    mut: "Փոխում են բուն զանգվածը",
    fresh: "Տալիս են նոր զանգված",
    loop: "Անցնել և հաշվարկել",
    make: "Ստեղծել և վերածել"
};

const M = [
    // ---------- Որոնել և ստուգել ----------
    {
        id: "at", name: ".at()", g: "search", es: "ES2022", v: "fruits", arr: FR,
        call: 'fruits.at(2)', fn: a => a.at(2),
        title: "Տարրը ինդեքսով",
        desc: "Վերադարձնում է տրված ինդեքսի տարրը։ Տարբերությունը [ ] գրելաձևից այն է, որ թույլ է տալիս բացասական ինդեքս. -1-ը վերջին տարրն է, -2-ը՝ նախավերջինը։",
        tip: "Փոխիր 2-ը -1-ի և կտեսնես վերջին տարրը։"
    },
    {
        id: "includes", name: ".includes()", g: "search", es: "ES2016", v: "fruits", arr: FR,
        call: 'fruits.includes("Mango")', fn: a => a.includes("Mango"),
        title: "Արդյո՞ք տարրը կա",
        desc: "Ստուգում է՝ զանգվածում կա՞ տրված արժեքը։ Վերադարձնում է true կամ false։ Համեմատությունը մեծատառ-փոքրատառ զգայուն է։",
        tip: "Փորձիր \"mango\" փոքրատառով. կստանաս false։"
    },
    {
        id: "index-of", name: ".indexOf()", g: "search", v: "fruits", arr: FR,
        call: 'fruits.indexOf("Apple")', fn: a => a.indexOf("Apple"),
        title: "Տարրի ինդեքսը",
        desc: "Որոնում է արժեքը սկզբից և վերադարձնում է առաջին համընկնման ինդեքսը։ Եթե արժեքը չկա, վերադարձնում է -1։",
        tip: "Գրիր մի մրգի անուն, որը զանգվածում չկա, և տես -1-ը։"
    },
    {
        id: "last-index-of", name: ".lastIndexOf()", g: "search", v: "fruits", arr: ["Apple", "Orange", "Apple", "Mango"],
        call: 'fruits.lastIndexOf("Apple")', fn: a => a.lastIndexOf("Apple"),
        title: "Վերջին համընկնումը",
        desc: "Որոնումը սկսվում է վերջից, և վերադարձվում է վերջին համընկնման ինդեքսը։ Ինդեքսը միևնույն է հաշվվում է սկզբից։ Չգտնելու դեպքում՝ -1։",
        tip: "Համեմատիր indexOf(\"Apple\")-ի հետ. այն կտա 0։"
    },
    {
        id: "find", name: ".find()", g: "search", v: "ages", arr: AG,
        call: 'ages.find(age => age > 18)', fn: a => a.find(x => x > 18),
        pred: x => x > 18, predText: "age > 18",
        title: "Առաջին համապատասխանող տարրը",
        desc: "Անցնում է ձախից աջ և վերադարձնում է առաջին տարրը, որի համար ֆունկցիան տալիս է true։ Առաջին համընկնումից հետո կանգ է առնում։ Եթե ոչինչ չի գտնվում՝ undefined։",
        tip: "Վերադարձնում է արժեքը, ոչ թե ինդեքսը։ Ինդեքսի համար կա findIndex()։"
    },
    {
        id: "find-index", name: ".findIndex()", g: "search", v: "ages", arr: AG,
        call: 'ages.findIndex(age => age > 18)', fn: a => a.findIndex(x => x > 18),
        pred: x => x > 18, predText: "age > 18",
        title: "Առաջին համընկնման ինդեքսը",
        desc: "Նույնն է, ինչ find()-ը, բայց վերադարձնում է ոչ թե տարրը, այլ նրա ինդեքսը։ Եթե ոչինչ չի գտնվում՝ -1։",
        tip: "Ինդեքսը պետք է գալիս, երբ տարրը պիտի ջնջես splice()-ով։"
    },
    {
        id: "find-last", name: ".findLast()", g: "search", es: "ES2023", v: "ages", arr: AG,
        call: 'ages.findLast(age => age > 18)', fn: a => a.findLast(x => x > 18),
        pred: x => x > 18, predText: "age > 18",
        title: "Վերջին համապատասխանող տարրը",
        desc: "Նույնն է, ինչ find()-ը, բայց ստուգումը սկսվում է վերջից՝ 20 → 18 → 30 → 3։ Վերադարձնում է պայմանին բավարարող վերջին տարրը։",
        tip: "Համեմատիր find()-ի հետ. նույն զանգվածում այն տվեց 30։"
    },
    {
        id: "find-last-index", name: ".findLastIndex()", g: "search", es: "ES2023", v: "ages", arr: AG,
        call: 'ages.findLastIndex(age => age > 18)', fn: a => a.findLastIndex(x => x > 18),
        pred: x => x > 18, predText: "age > 18",
        title: "Վերջին համընկնման ինդեքսը",
        desc: "Ստուգումը սկսվում է վերջից, բայց վերադարձվող ինդեքսը իրական է (հաշվված սկզբից)։ Եթե ոչինչ չի գտնվում՝ -1։",
        tip: "Ինդեքսը չի շրջվում. վերջին տարրը միշտ ունի ամենամեծ ինդեքսը։"
    },
    {
        id: "every", name: ".every()", g: "search", v: "ages", arr: [32, 33, 16, 40],
        call: 'ages.every(age => age > 18)', fn: a => a.every(x => x > 18),
        pred: x => x > 18, predText: "age > 18",
        title: "Բոլորը բավարարո՞ւմ են",
        desc: "Վերադարձնում է true միայն այն դեպքում, երբ բոլոր տարրերը բավարարում են պայմանին։ Առաջին չբավարարողին հանդիպելիս կանգ է առնում և տալիս է false։",
        tip: "Փոխիր 16-ը 20-ի. կստանաս true։"
    },
    {
        id: "some", name: ".some()", g: "search", v: "ages", arr: [3, 10, 18, 20],
        call: 'ages.some(age => age > 18)', fn: a => a.some(x => x > 18),
        pred: x => x > 18, predText: "age > 18",
        title: "Գոնե մեկը բավարարո՞ւմ է",
        desc: "Վերադարձնում է true, եթե գոնե մեկ տարր բավարարում է պայմանին։ Առաջին համընկնումից հետո կանգ է առնում։ Դատարկ զանգվածի համար միշտ false է։",
        tip: "every()-ը «բոլորը» է (ԵՎ), some()-ը՝ «գոնե մեկը» (ԿԱՄ)։"
    },

    // ---------- Փոխում են բուն զանգվածը ----------
    {
        id: "pop", name: ".pop()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.pop()', fn: a => a.pop(),
        title: "Ջնջել վերջինը",
        desc: "Հեռացնում է զանգվածի վերջին տարրը և վերադարձնում է այն։ Զանգվածը կարճանում է։ Քանի անգամ կանչես, այնքան տարր կջնջվի։",
        tip: "Գրիր fruits.pop() երկու անգամ իրար հետևից և նայիր զանգվածին։"
    },
    {
        id: "push", name: ".push()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.push("Kiwi")', fn: a => a.push("Kiwi"),
        title: "Ավելացնել վերջում",
        desc: "Տարրը ավելացնում է զանգվածի վերջում։ Վերադարձնում է ոչ թե զանգվածը, այլ նրա նոր երկարությունը։",
        tip: "Կարելի է մի քանի արժեք միանգամից՝ push(\"Kiwi\", \"Lime\")։"
    },
    {
        id: "shift", name: ".shift()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.shift()', fn: a => a.shift(),
        title: "Ջնջել առաջինը",
        desc: "Հեռացնում է առաջին տարրը և վերադարձնում է այն։ Մնացած բոլոր տարրերի ինդեքսները նվազում են 1-ով։",
        tip: "pop()-ը ջնջում է վերջինը, shift()-ը՝ առաջինը։"
    },
    {
        id: "unshift", name: ".unshift()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.unshift("Lemon", "Pineapple")', fn: a => a.unshift("Lemon", "Pineapple"),
        title: "Ավելացնել սկզբում",
        desc: "Մեկ կամ մի քանի տարր ավելացնում է սկզբում և վերադարձնում է նոր երկարությունը։ Հին տարրերը տեղաշարժվում են դեպի աջ։",
        tip: "push()-ը ավելացնում է վերջում, unshift()-ը՝ սկզբում։"
    },
    {
        id: "splice", name: ".splice()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.splice(2, 1, "Lemon", "Kiwi")', fn: a => a.splice(2, 1, "Lemon", "Kiwi"),
        title: "Ավելացնել, ջնջել, փոխարինել",
        desc: "splice(սկիզբ, քանիսը ջնջել, ինչ ավելացնել)։ Այստեղ ինդեքս 2-ից ջնջվում է 1 տարր (Apple), և նրա տեղը մտնում են Lemon-ը և Kiwi-ն։ Վերադարձնում է ջնջվածների զանգվածը։",
        tip: "Փոխիր 1-ը 0-ի. ոչինչ չի ջնջվի, միայն կավելանա։"
    },
    {
        id: "fill", name: ".fill()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.fill("Kiwi")', fn: a => a.fill("Kiwi"),
        title: "Լրացնել մեկ արժեքով",
        desc: "Բոլոր տարրերը փոխարինում է նույն արժեքով և վերադարձնում է նույն զանգվածը։",
        tip: "fill(\"Kiwi\", 1, 3)-ը կլրացնի միայն ինդեքս 1-ից 3-ը (3-ը չի մտնում)։"
    },
    {
        id: "copy-within", name: ".copyWithin()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.copyWithin(2, 0)', fn: a => a.copyWithin(2, 0),
        title: "Պատճենել նույն զանգվածի մեջ",
        desc: "Զանգվածի մի հատվածը պատճենում է նույն զանգվածի մեկ այլ դիրք։ copyWithin(2, 0)-ը վերցնում է ինդեքս 0-ից սկսած տարրերը և գրում է ինդեքս 2-ից սկսած։ Երկարությունը չի փոխվում, ուստի ավելորդը կտրվում է։",
        tip: "Ավելացրու երրորդ արգումենտ՝ copyWithin(2, 0, 1), և կպատճենվի միայն մեկ տարր։"
    },
    {
        id: "reverse", name: ".reverse()", g: "mut", v: "fruits", arr: FR,
        call: 'fruits.reverse()', fn: a => a.reverse(),
        title: "Շրջել հերթականությունը",
        desc: "Տարրերի հերթականությունը դարձնում է հակառակը։ Փոխում է բուն զանգվածը։ Նոր զանգված ստանալու համար օգտագործիր toReversed()։",
        tip: "Տես վերևի «Փոխվեց» նշանը. սկզբնական զանգվածն էլ է շրջվում։"
    },
    {
        id: "sort", name: ".sort()", g: "mut", v: "nums", arr: [3, 20, 4, 5],
        call: 'nums.sort()', fn: a => a.sort(),
        title: "Դասավորել",
        desc: "Առանց արգումենտի տարրերը դասավորում է որպես տողեր՝ այբբենական կարգով։ Դրա համար \"20\"-ը գալիս է \"3\"-ից առաջ։ Թվերը ճիշտ դասավորելու համար պետք է համեմատման ֆունկցիա։",
        tip: "Փորձիր nums.sort((a, b) => a - b)։"
    },

    // ---------- Տալիս են նոր զանգված ----------
    {
        id: "filter", name: ".filter()", g: "fresh", v: "ages", arr: [32, 5, 16, 40],
        call: 'ages.filter(age => age >= 18)', fn: a => a.filter(x => x >= 18),
        pred: x => x >= 18, predText: "age >= 18",
        title: "Ֆիլտրել",
        desc: "Վերադարձնում է նոր զանգված, որտեղ մնում են միայն այն տարրերը, որոնց համար ֆունկցիան տվել է true։ Սկզբնական զանգվածը չի փոխվում։",
        tip: "Ի տարբերություն find()-ի՝ filter()-ը տալիս է բոլոր համընկնումները։"
    },
    {
        id: "slice", name: ".slice()", g: "fresh", v: "fruits", arr: FR5,
        call: 'fruits.slice(1, 3)', fn: a => a.slice(1, 3),
        title: "Կտրել հատված",
        desc: "Վերադարձնում է նոր զանգված՝ սկիզբ ինդեքսից մինչև վերջ ինդեքսը (վերջինը չի մտնում)։ Բուն զանգվածը չի փոխվում։ Բացասական ինդեքսները հաշվվում են վերջից։",
        tip: "Փորձիր slice(-3, -1)։"
    },
    {
        id: "concat", name: ".concat()", g: "fresh", v: "arr1", arr: [1, 2, 3],
        pre: "const arr2 = [4, 5, 6];",
        call: 'arr1.concat(arr2)', fn: a => a.concat([4, 5, 6]),
        title: "Միավորել զանգվածներ",
        desc: "Երկու կամ ավելի զանգված միավորում է մեկ նոր զանգվածի մեջ։ Սկզբնական զանգվածները չեն փոխվում։",
        tip: "Կարելի է միավորել երեքը՝ arr1.concat(arr2, [7, 8])։"
    },
    {
        id: "spread", name: "[...spread]", g: "fresh", es: "ES2015", v: "arr1", arr: [1, 2, 3],
        pre: "const arr2 = [4, 5, 6];",
        call: '[...arr1, ...arr2]', fn: a => [...a, ...[4, 5, 6]],
        title: "Spread օպերատոր",
        desc: "Երեք կետը (...) զանգվածի տարրերը «բացում է» առանձին արժեքների։ Քառակուսի փակագծերի մեջ դրանք կազմում են նոր զանգված։ Արդյունքը նույնն է, ինչ concat()-ինը, բայց տարրերը կարելի է դնել ցանկացած դիրքում։",
        tip: "Փորձիր [0, ...arr1, 99, ...arr2]։"
    },
    {
        id: "to-reversed", name: ".toReversed()", g: "fresh", es: "ES2023", v: "fruits", arr: FR,
        call: 'fruits.toReversed()', fn: a => a.toReversed(),
        title: "Շրջել՝ առանց փոխելու",
        desc: "Նույնն է, ինչ reverse()-ը, բայց բուն զանգվածը մնում է անփոփոխ, իսկ արդյունքը նոր շրջված զանգված է։",
        tip: "Համեմատիր reverse()-ի հետ. այնտեղ սկզբնական զանգվածը փոխվում էր։"
    },
    {
        id: "to-sorted", name: ".toSorted()", g: "fresh", es: "ES2023", v: "fruits", arr: FR,
        call: 'fruits.toSorted()', fn: a => a.toSorted(),
        title: "Դասավորել՝ առանց փոխելու",
        desc: "Նույնն է, ինչ sort()-ը, բայց բուն զանգվածը չի փոխվում։ Վերադարձնում է նոր դասավորված զանգված՝ այբբենական կարգով։",
        tip: "Թվերի համար՝ nums.toSorted((a, b) => a - b)։"
    },
    {
        id: "to-spliced", name: ".toSpliced()", g: "fresh", es: "ES2023", v: "fruits", arr: FR,
        call: 'fruits.toSpliced(2, 0, "Lemon", "Kiwi")', fn: a => a.toSpliced(2, 0, "Lemon", "Kiwi"),
        title: "Splice՝ առանց փոխելու",
        desc: "Նույնն է, ինչ splice()-ը, բայց բուն զանգվածը չի փոխվում։ Վերադարձնում է նոր զանգված, որտեղ ինդեքս 2-ում ավելացված են Lemon-ը և Kiwi-ն։",
        tip: "Ի տարբերություն splice()-ի՝ այստեղ արդյունքը հենց նոր զանգվածն է, ոչ ջնջվածները։"
    },
    {
        id: "with", name: ".with()", g: "fresh", es: "ES2023", v: "months", arr: ["Januar", "Februar", "Mar", "April"],
        call: 'months.with(2, "March")', fn: a => a.with(2, "March"),
        title: "Փոխարինել մեկ տարր",
        desc: "Վերադարձնում է նոր զանգված, որտեղ նշված ինդեքսի արժեքը փոխարինված է։ Սա months[2] = \"March\" գրելու այն տարբերակն է, որը բուն զանգվածը չի փոխում։",
        tip: "Փորձիր months.with(-1, \"Apr\")։ Սահմաններից դուրս ինդեքսը սխալ է տալիս։"
    },
    {
        id: "flat", name: ".flat()", g: "fresh", es: "ES2019", v: "myArr", arr: [1, 2, [3, [4, 5, 6], 7], 8],
        call: 'myArr.flat(1)', fn: a => a.flat(1),
        title: "Տափակեցնել ներդրվածը",
        desc: "Ներդրված զանգվածները «բացում է» նշված խորությամբ։ flat(1)-ը բացում է մեկ մակարդակ, ուստի [4, 5, 6]-ը մնում է զանգված։ Վերադարձնում է նոր զանգված։",
        tip: "Փորձիր flat(2), ապա flat(Infinity)։"
    },
    {
        id: "flat-map", name: ".flatMap()", g: "fresh", es: "ES2019", v: "myArr", arr: [1, 2, 3, 4, 5, 6],
        call: 'myArr.flatMap(x => [x, x * 10])', fn: a => a.flatMap(x => [x, x * 10]),
        title: "map() և flat(1) միասին",
        desc: "Նախ յուրաքանչյուր տարրի վրա կիրառում է ֆունկցիան (map), հետո ստացված ներքին զանգվածները բացում է մեկ մակարդակ (flat)։ Արդյունքը հարթ զանգված է։",
        tip: "Եթե ֆունկցիան վերադարձնի [], տարրը արդյունքից դուրս կմնա։"
    },
    {
        id: "map", name: ".map()", g: "fresh", v: "numbers", arr: [4, 9, 16, 25],
        call: 'numbers.map(Math.sqrt)', fn: a => a.map(Math.sqrt),
        title: "Վերափոխել յուրաքանչյուր տարր",
        desc: "Ֆունկցիան կիրառում է բոլոր տարրերի վրա և վերադարձնում է նոր զանգված՝ նույն երկարությամբ։ Այստեղ Math.sqrt-ը տալիս է քառակուսի արմատը։ Բուն զանգվածը չի փոխվում։",
        tip: "Math.sqrt-ը փոխանցվում է առանց փակագծերի. map()-ն ինքն է այն կանչում։"
    },

    // ---------- Անցնել և հաշվարկել ----------
    {
        id: "for-each", name: ".forEach()", g: "loop", v: "fruits", arr: ["apple", "orange", "cherry"],
        call: 'fruits.forEach(f => console.log(f))', fn: a => a.forEach(() => { }),
        title: "Կատարել ամեն տարրի համար",
        desc: "Յուրաքանչյուր տարրի համար կանչում է ֆունկցիան։ Ինքն ոչինչ չի վերադարձնում, այսինքն՝ արդյունքը undefined է։ Եթե արդյունք ես ուզում, օգտագործիր map()։",
        tip: "Ներքևի արդյունքների տողերում տեսիր տպված երեք մրգերը։"
    },
    {
        id: "reduce", name: ".reduce()", g: "loop", v: "numbers", arr: [175, 50, 25],
        call: 'numbers.reduce((total, num) => total - num)', fn: a => a.reduce((t, n) => t - n),
        trace: ["total = 175 (առաջին տարրը)", "175 − 50 = 125", "125 − 25 = 100"],
        title: "Հավաքել մեկ արժեքի մեջ",
        desc: "Զանգվածը «ծալում» է մեկ արժեքի։ total-ը կուտակված արդյունքն է, num-ը՝ ընթացիկ տարրը։ Առանց սկզբնական արժեքի total-ը սկզբում առաջին տարրն է, և անցումը սկսվում է երկրորդից։",
        tip: "Փորձիր reduce((t, n) => t + n, 0). կստանաս գումարը։"
    },
    {
        id: "reduce-right", name: ".reduceRight()", g: "loop", v: "numbers", arr: [175, 50, 25],
        call: 'numbers.reduceRight((total, num) => total - num)', fn: a => a.reduceRight((t, n) => t - n),
        trace: ["total = 25 (վերջին տարրը)", "25 − 50 = −25", "−25 − 175 = −200"],
        title: "Հավաքել աջից ձախ",
        desc: "Աշխատում է ինչպես reduce()-ը, բայց անցնում է վերջից սկիզբ։ Հանման դեպքում հերթականությունը փոխում է արդյունքը՝ 100-ի փոխարեն ստացվում է -200։",
        tip: "Գումարման դեպքում երկուսի արդյունքը նույնն է։"
    },
    {
        id: "entries", name: ".entries()", g: "loop", es: "ES2015", v: "fruits", arr: FR,
        call: '[...fruits.entries()]', fn: a => [...a.entries()],
        title: "Զույգեր՝ ինդեքս և արժեք",
        desc: "Վերադարձնում է իտերատոր, որը տալիս է [ինդեքս, արժեք] զույգեր։ Այստեղ spread-ով այն վերածված է սովորական զանգվածի։ Իտերատորը մեկանգամյա է. մեկ անգամ անցնելուց հետո սպառվում է։",
        tip: "Ցիկլում հարմար է destructuring-ով՝ for (const [i, v] of fruits.entries())։"
    },
    {
        id: "keys", name: ".keys()", g: "loop", es: "ES2015", v: "fruits", arr: FR,
        call: '[...fruits.keys()]', fn: a => [...a.keys()],
        title: "Միայն ինդեքսները",
        desc: "Վերադարձնում է իտերատոր, որը տալիս է զանգվածի ինդեքսները՝ 0, 1, 2, 3։ Իտերատորը զանգված չէ. զանգվածի վերածելու համար օգտագործվում է spread (...) կամ Array.from()։",
        tip: "Առանց spread-ի console.log-ը կտպի Object [Array Iterator] {}։"
    },
    {
        id: "values", name: ".values()", g: "loop", es: "ES2015", v: "fruits", arr: FR,
        call: '[...fruits.values()]', fn: a => [...a.values()],
        title: "Միայն արժեքները",
        desc: "Վերադարձնում է իտերատոր, որը տալիս է զանգվածի արժեքները։ Սա հենց նույնն է, ինչ for...of ցիկլը անում է լռելյայն։",
        tip: "for (const x of fruits) և for (const x of fruits.values()) նույնն են։"
    },

    // ---------- Ստեղծել և վերածել ----------
    {
        id: "array-from", name: "Array.from()", g: "make", es: "ES2015", v: "text", arr: "ABCDEFG",
        call: 'Array.from(text)', fn: a => Array.from(a),
        title: "Տողից կամ իտերատորից զանգված",
        desc: "Վերածում է զանգվածանման կամ իտերացվող արժեքը (տող, Set, իտերատոր) իսկական զանգվածի։ Այստեղ տողի յուրաքանչյուր նիշ դառնում է տարր։",
        tip: "Փորձիր Array.from(\"ABC\", c => c + c)։"
    },
    {
        id: "array-of", name: "Array.of()", g: "make", es: "ES2015", v: "fruits", arr: null,
        call: 'Array.of("Banana", "Orange", "Apple", "Mango")', fn: () => Array.of("Banana", "Orange", "Apple", "Mango"),
        title: "Զանգված արգումենտներից",
        desc: "Ստեղծում է զանգված իրեն տրված արգումենտներից։ Array.of(3)-ը տալիս է [3], մինչդեռ new Array(3)-ը ստեղծում է 3 դատարկ տեղով զանգված։",
        tip: "Փորձիր Array.of(3) և new Array(3)։"
    },
    {
        id: "is-array", name: "Array.isArray()", g: "make", v: "fruits", arr: FR,
        call: 'Array.isArray(fruits)', fn: a => Array.isArray(a),
        title: "Զանգված է՞",
        desc: "Ստուգում է՝ տրված արժեքը զանգվածի տիպի՞ է։ Գոյությունը չի ստուգում. միայն տիպը։ typeof-ը զանգվածի համար տալիս է \"object\", ուստի այստեղ պետք է հենց isArray()։",
        tip: "Փորձիր Array.isArray(\"hello\") և Array.isArray({ a: 1 })։"
    },
    {
        id: "join", name: ".join()", g: "make", v: "fruits", arr: FR,
        call: 'fruits.join("-")', fn: a => a.join("-"),
        title: "Զանգվածից տող",
        desc: "Բոլոր տարրերը միացնում է մեկ տողի մեջ՝ նշված բաժանիչով։ Առանց արգումենտի բաժանիչը ստորակետն է։ Հակառակը անում է split()-ը։",
        tip: "Փորձիր join(\"\") և join(\" - \")։"
    },
    {
        id: "to-string", name: ".toString()", g: "make", v: "fruits", arr: FR,
        call: 'fruits.toString()', fn: a => a.toString(),
        title: "Զանգվածից տող՝ ստորակետով",
        desc: "Վերածում է տողի, տարրերը բաժանելով ստորակետով։ Նույնն է, ինչ join()-ը առանց արգումենտի, բայց բաժանիչը փոխել հնարավոր չէ։",
        tip: "JavaScript-ը այս մեթոդը ինքնուրույն կանչում է, երբ զանգվածը կցում ես տողին։"
    },
    {
        id: "value-of", name: ".valueOf()", g: "make", v: "fruits", arr: FR,
        call: 'fruits.valueOf() === fruits', fn: a => a.valueOf() === a,
        title: "Նույն զանգվածը հղումով",
        desc: "Զանգվածի դեպքում վերադարձնում է բուն զանգվածը՝ նույն հղումով, առանց պատճենի։ Գործնականում գրեթե չի օգտագործվում. այն գոյություն ունի, որովհետև բոլոր օբյեկտները այն ժառանգում են։",
        tip: "Իրական պատճենի համար՝ [...fruits] կամ fruits.slice()։"
    },
    {
        id: "rest", name: "[a, ...rest]", g: "make", es: "ES2015", v: "arr1", arr: [1, 2, 3, 4, 5, 6, 7, 8],
        call: 'const [a, ...rest] = arr1',
        code: "const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];\nconst [a, ...rest] = arr1;\nconsole.log(a);\nconsole.log(rest);",
        fn: a => ({ a: a[0], rest: a.slice(1) }),
        title: "Քանդել զանգվածը",
        desc: "Destructuring-ը զանգվածի տարրերը բաշխում է փոփոխականների մեջ։ a-ն ստանում է առաջին տարրը, իսկ ...rest-ը հավաքում է մնացած բոլորը նոր զանգվածի մեջ։ ...rest-ը միշտ վերջինն է։",
        tip: "Փորձիր const [a, b, c, d, ...rest] = arr1. այդպես կստանաս առաջին չորսը առանձին։"
    }
];

const CMP = [
    {
        id: "find-vs-index", t: "find() և findIndex()", v: "ages", arr: [3, 30, 18, 20],
        text: "Երկուսն էլ փնտրում են առաջին համընկնումը։ find()-ը տալիս է տարրը, findIndex()-ը՝ նրա դիրքը։",
        a: { call: "ages.find(x => x > 18)", fn: a => a.find(x => x > 18) },
        b: { call: "ages.findIndex(x => x > 18)", fn: a => a.findIndex(x => x > 18) }
    },
    {
        id: "find-vs-last", t: "find() և findLast()", v: "ages", arr: [3, 30, 18, 20],
        text: "Նույն զանգվածում երկու համընկնում կա՝ 30 և 20։ find()-ը սկսում է ձախից, findLast()-ը՝ աջից։",
        a: { call: "ages.find(x => x > 18)", fn: a => a.find(x => x > 18) },
        b: { call: "ages.findLast(x => x > 18)", fn: a => a.findLast(x => x > 18) }
    },
    {
        id: "sort-vs-tosorted", t: "sort() և toSorted()", v: "fruits", arr: FR,
        text: "Արդյունքը նույնն է։ Տարբերությունը այն է, թե ինչ է լինում սկզբնական զանգվածի հետ։",
        a: { call: "fruits.sort()", fn: a => a.sort() },
        b: { call: "fruits.toSorted()", fn: a => a.toSorted() }
    },
    {
        id: "reverse-vs-toreversed", t: "reverse() և toReversed()", v: "fruits", arr: FR,
        text: "reverse()-ը շրջում է բուն զանգվածը։ toReversed()-ը տալիս է նոր շրջված զանգված։",
        a: { call: "fruits.reverse()", fn: a => a.reverse() },
        b: { call: "fruits.toReversed()", fn: a => a.toReversed() }
    },
    {
        id: "slice-vs-splice", t: "slice() և splice()", v: "fruits", arr: FR5,
        text: "slice()-ը միայն կտրում է պատճենը։ splice()-ը ջնջում է տարրերը բուն զանգվածից։ Երկրորդ արգումենտը տարբեր է. slice-ում՝ վերջի ինդեքս, splice-ում՝ քանակ։",
        a: { call: "fruits.slice(1, 3)", fn: a => a.slice(1, 3) },
        b: { call: "fruits.splice(1, 2)", fn: a => a.splice(1, 2) }
    },
    {
        id: "concat-vs-spread", t: "concat() և spread", v: "nums", arr: [1, 2, 3],
        text: "concat()-ը տողը չի բացում և ավելացնում է որպես մեկ տարր։ Spread-ը իտերացվող արժեքը (օրինակ՝ տողը) բացում է նիշերի։",
        a: { call: 'nums.concat("abc")', fn: a => a.concat("abc") },
        b: { call: '[...nums, ..."abc"]', fn: a => [...a, ..."abc"] }
    },
    {
        id: "join-vs-tostring", t: "join() և toString()", v: "fruits", arr: FR,
        text: "toString()-ը միշտ ստորակետով է։ join()-ով բաժանիչը ընտրում ես դու։",
        a: { call: 'fruits.join(" - ")', fn: a => a.join(" - ") },
        b: { call: "fruits.toString()", fn: a => a.toString() }
    },
    {
        id: "reduce-vs-right", t: "reduce() և reduceRight()", v: "numbers", arr: [175, 50, 25],
        text: "Հանման դեպքում ուղղությունը փոխում է արդյունքը։ Գումարման դեպքում կստանայիր նույնը։",
        a: { call: "numbers.reduce((t, n) => t - n)", fn: a => a.reduce((t, n) => t - n) },
        b: { call: "numbers.reduceRight((t, n) => t - n)", fn: a => a.reduceRight((t, n) => t - n) }
    },
    {
        id: "map-vs-foreach", t: "map() և forEach()", v: "nums", arr: [1, 2, 3],
        text: "Նույն ֆունկցիան, բայց map()-ը հավաքում է արդյունքները նոր զանգվածի մեջ, իսկ forEach()-ը դեն է նետում դրանք և վերադարձնում է undefined։",
        a: { call: "nums.map(x => x * 2)", fn: a => a.map(x => x * 2) },
        b: { call: "nums.forEach(x => x * 2)", fn: a => a.forEach(x => x * 2) }
    },
    {
        id: "at-vs-bracket", t: "at(-1) և [-1]", v: "fruits", arr: FR,
        text: "Քառակուսի փակագծերում -1-ը սովորական հատկության անուն է, ոչ թե «վերջից»։ at()-ը հասկանում է բացասական ինդեքսը։",
        a: { call: "fruits.at(-1)", fn: a => a.at(-1) },
        b: { call: "fruits[-1]", fn: a => a[-1] }
    },
    {
        id: "includes-vs-indexof", t: "includes() և indexOf()", v: "fruits", arr: FR,
        text: "includes()-ը պատասխանում է «կա՞» հարցին։ indexOf()-ը՝ «որտե՞ղ է» հարցին, և չգտնելու դեպքում տալիս է -1։",
        a: { call: 'fruits.includes("Apple")', fn: a => a.includes("Apple") },
        b: { call: 'fruits.indexOf("Apple")', fn: a => a.indexOf("Apple") }
    }
];

(function () {
    var $ = function (s) { return document.querySelector(s); };
    var esc = function (s) {
        return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
    };
    var clone = function (x) { return x === undefined ? undefined : JSON.parse(JSON.stringify(x)); };

    // value -> readable JS-like text
    function js(v) {
        if (v === undefined) return "undefined";
        if (Array.isArray(v)) return "[" + v.map(js).join(", ") + "]";
        if (v && typeof v === "object") return "{ " + Object.keys(v).map(function (k) { return k + ": " + js(v[k]); }).join(", ") + " }";
        return JSON.stringify(v);
    }
    function typeName(v) {
        if (v === undefined) return "undefined";
        if (typeof v === "string") return "տող";
        if (typeof v === "number") return "թիվ";
        if (typeof v === "boolean") return "true / false";
        return typeof v;
    }
    function buildCode(m) {
        if (m.code) return m.code;
        var s = "";
        var isArr = Array.isArray(m.arr);
        if (m.arr !== null && m.arr !== undefined) s += "const " + m.v + " = " + js(m.arr) + ";\n";
        if (m.pre) s += m.pre + "\n";
        s += "const result = " + m.call + ";\n";
        s += 'console.log("Արդյունք:", result);\n';
        if (isArr) s += 'console.log("Զանգվածը հետո:", ' + m.v + ");\n";
        return s;
    }

    // ---------- state ----------
    var learned = new Set();
    try { learned = new Set(JSON.parse(localStorage.getItem("jsarr-learned") || "[]")); } catch (e) { /* storage unavailable */ }
    function saveLearned() { try { localStorage.setItem("jsarr-learned", JSON.stringify(Array.from(learned))); } catch (e) { /* ignore */ } }
    var state = { q: "", g: "all", hidden: false, cur: "at" };

    function updateProgress() {
        var n = learned.size;
        $("#pCount").textContent = n + " / " + M.length;
        $("#pBar").style.width = (100 * n / M.length) + "%";
    }

    // ---------- cells ----------
    function cellsHTML(arr, o) {
        o = o || {};
        if (!arr.length && !(o.base && o.base.length)) return '<div class="cells"><div class="cell empty"><span class="val">[ ] դատարկ</span></div></div>';
        var h = '<div class="cells">';
        arr.forEach(function (x, i) {
            var c = "cell", mk = "";
            if (o.pred && o.pred(x, i)) { c += " ok"; mk = '<span class="mk">✓</span>'; }
            if (o.base && (i >= o.base.length || JSON.stringify(o.base[i]) !== JSON.stringify(x))) c += " chg";
            h += '<div class="' + c + '"><span class="ix">' + i + '</span><span class="val">' + (o.hidden ? "?" : esc(js(x))) + "</span>" + mk + "</div>";
        });
        if (o.base && o.base.length > arr.length) {
            for (var i = arr.length; i < o.base.length; i++) h += '<div class="cell ghost"><span class="ix">' + i + '</span><span class="val">—</span></div>';
        }
        return h + "</div>";
    }
    function valueHTML(res, hidden) {
        if (Array.isArray(res)) return cellsHTML(res, { hidden: hidden });
        if (res && typeof res === "object") {
            return '<div class="obj">' + Object.keys(res).map(function (k) {
                var v = res[k];
                return '<div><span class="k">' + esc(k) + "</span>" + (Array.isArray(v) ? cellsHTML(v, { hidden: hidden }) :
                    '<div class="single"><span class="val">' + (hidden ? "?" : esc(js(v))) + '</span><span class="ty">' + typeName(v) + "</span></div>") + "</div>";
            }).join("") + "</div>";
        }
        return '<div class="single"><span class="val">' + (hidden ? "?" : esc(js(res))) + '</span><span class="ty">' + typeName(res) + "</span></div>";
    }
    function compute(m) {
        var a = clone(m.arr), before = clone(m.arr), res, err = null;
        try { res = m.fn(a); } catch (e) { err = e; }
        return { before: before, res: res, after: a, err: err, mutated: JSON.stringify(before) !== JSON.stringify(a) };
    }
    function verdictHTML(mutated) {
        return mutated ? '<span class="verdict chg">Բուն զանգվածը փոխվեց</span>' : '<span class="verdict same">Բուն զանգվածը անփոփոխ է</span>';
    }

    // ---------- nav ----------
    function buildSelect() {
        var h = '<option value="all">Բոլոր խմբերը</option>';
        Object.keys(GROUPS).forEach(function (k) { h += '<option value="' + k + '">' + esc(GROUPS[k]) + "</option>"; });
        $("#g").innerHTML = h;
    }
    function renderNav() {
        var q = state.q.trim().toLowerCase();
        var list = M.filter(function (m) {
            return (state.g === "all" || m.g === state.g) && (!q || (m.name + " " + m.title + " " + m.id).toLowerCase().indexOf(q) !== -1);
        });
        var h = '<a class="navitem cmp' + (state.cur === "compare" ? " on" : "") + '" href="#compare"><span>Համեմատություններ</span><span>⇄</span></a>';
        Object.keys(GROUPS).forEach(function (g) {
            var items = list.filter(function (m) { return m.g === g; });
            if (!items.length) return;
            h += '<div class="gh">' + esc(GROUPS[g]) + "</div>";
            items.forEach(function (m) {
                h += '<a class="navitem' + (state.cur === m.id ? " on" : "") + '" href="#' + m.id + '"><span>' + esc(m.name) + "</span>" +
                    (learned.has(m.id) ? '<span class="ok" aria-label="սովորած">✓</span>' : "") + "</a>";
            });
        });
        if (!list.length) h += '<div class="empty-nav">Ոչինչ չգտնվեց։</div>';
        $("#navlist").innerHTML = h;
    }

    // ---------- run code ----------
    function runCode(src) {
        var logs = [];
        var con = { log: function () { logs.push(Array.prototype.map.call(arguments, function (x) { return typeof x === "string" ? x : js(x); }).join(" ")); } };
        try { new Function("console", src)(con); return { logs: logs }; }
        catch (e) { return { logs: logs, err: e }; }
    }
    function showOut(target, r) {
        var h = esc(r.logs.join("\n"));
        if (r.err) {
            var blocked = r.err instanceof EvalError || /unsafe-eval|Content Security/i.test(String(r.err.message));
            h += (h ? "\n" : "") + '<span class="err">' + (blocked ? "Այս դիտարկիչում կոդի գործարկումն արգելված է։" : esc(r.err.name + ": " + r.err.message)) + "</span>";
        }
        target.innerHTML = h || '<span class="err">Ոչինչ չտպվեց։ Ավելացրու console.log(...)։</span>';
    }

    // ---------- method view ----------
    function renderMethod(id) {
        var idx = M.findIndex(function (m) { return m.id === id; });
        var m = M[idx];
        var c = compute(m);
        var isArr = Array.isArray(m.arr);
        var hasInput = m.arr !== null && m.arr !== undefined;
        var h = "";

        h += '<section class="panel"><div class="mh"><div><h2 class="mname">' + esc(m.name) + '</h2><p class="mtitle">' + esc(m.title) + "</p>" +
            '<div class="badges"><span class="badge">' + esc(GROUPS[m.g]) + "</span>" +
            (m.es ? '<span class="badge">' + m.es + "</span>" : "") +
            (isArr ? (c.mutated ? '<span class="badge mutates">փոխում է բուն զանգվածը</span>' : '<span class="badge safe">չի փոխում բուն զանգվածը</span>') : "") +
            '</div></div><button class="btn' + (learned.has(m.id) ? " done" : "") + '" id="btnLearn" aria-pressed="' + learned.has(m.id) + '">' +
            (learned.has(m.id) ? "✓ Սովորած" : "Նշել որպես սովորած") + "</button></div>" +
            '<p class="desc">' + esc(m.desc) + "</p></section>";

        h += '<section class="stage" aria-label="Վիզուալ օրինակ" id="stage">';
        if (hasInput) {
            h += '<div><div class="rowlabel">Սկզբում <code>' + esc(m.v) + "</code></div>";
            if (isArr) h += cellsHTML(c.before, { pred: m.pred });
            else h += '<div class="single"><span class="val">' + esc(js(c.before)) + '</span><span class="ty">' + typeName(c.before) + "</span></div>";
            if (m.pred) h += '<p class="legend" style="margin-top:8px"><span class="sw g"></span>✓ պայմանը բավարարվում է՝ <code>' + esc(m.predText) + "</code></p>";
            h += "</div>";
        }
        h += '<div class="callrow"><span class="arrow">↓</span><code>' + esc(m.call) + "</code></div>";
        h += '<div id="resWrap"></div>';
        if (m.trace) h += '<ol class="trace">' + m.trace.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ol>";
        h += "</section>";

        h += '<section class="panel"><h3>Գուշակիր արդյունքը</h3><p class="hint">Գրիր, թե ինչ է վերադարձնում կանչը, օրինակ՝ <code>[1, 2]</code>, <code>"Apple"</code> կամ <code>true</code>։ Կարող ես նախ թաքցնել պատասխանը։</p>' +
            '<div class="guessrow"><input id="guess" class="mono" type="text" placeholder="քո պատասխանը" autocomplete="off" spellcheck="false" aria-label="Քո պատասխանը">' +
            '<button class="btn primary" id="btnGuess">Ստուգել</button><button class="btn" id="btnHide"></button></div>' +
            '<p class="msg" id="msg" role="status"></p></section>';

        h += '<section class="panel"><h3>Փորձիր ինքդ</h3><p class="hint">Փոխիր կոդը և սեղմիր «Գործարկել»։ Արդյունքը կերևա ներքևում։</p>' +
            '<textarea id="code" spellcheck="false" aria-label="Կոդի խմբագրիչ">' + esc(buildCode(m)) + "</textarea>" +
            '<div class="runrow"><button class="btn primary" id="btnRun">Գործարկել</button><button class="btn" id="btnReset">Վերականգնել</button><span class="kbd">Ctrl + Enter</span></div>' +
            '<pre class="out" id="out" aria-live="polite"></pre></section>';

        h += '<div class="tip"><b>Փորձիր</b><span>' + esc(m.tip) + "</span></div>";

        var prev = M[idx - 1], next = M[idx + 1];
        h += '<div class="pager">' + (prev ? '<a class="btn" href="#' + prev.id + '">← ' + esc(prev.name) + "</a>" : "<span></span>") +
            (next ? '<a class="btn" href="#' + next.id + '">' + esc(next.name) + " →</a>" : '<a class="btn" href="#compare">Համեմատություններ →</a>') + "</div>";

        $("#detail").innerHTML = h;

        function drawResult() {
            var hid = state.hidden;
            var r = '<div class="rowlabel">Վերադարձնում է</div>' + (c.err ? '<p class="msg bad">' + esc(c.err.message) + "</p>" : valueHTML(c.res, hid));
            if (isArr) {
                r += '<div style="margin-top:18px"><div class="rowlabel">Զանգվածը հետո <code>' + esc(m.v) + "</code> " + (hid ? "" : verdictHTML(c.mutated)) + "</div>" +
                    cellsHTML(c.after, { base: hid ? null : c.before, hidden: hid }) +
                    (!hid && c.mutated ? '<p class="legend" style="margin-top:8px"><span class="sw a"></span>փոխված կամ նոր տեղ</p>' : "") + "</div>";
            }
            $("#resWrap").innerHTML = r;
            $("#btnHide").textContent = hid ? "Ցույց տուր պատասխանը" : "Թաքցնել պատասխանը";
        }
        drawResult();

        // learned toggle
        $("#btnLearn").addEventListener("click", function () {
            if (learned.has(m.id)) learned.delete(m.id); else learned.add(m.id);
            saveLearned(); updateProgress(); renderNav(); renderMethod(m.id);
        });

        // hide / show
        $("#btnHide").addEventListener("click", function () {
            state.hidden = !state.hidden; drawResult();
            if (state.hidden) $("#guess").focus();
        });

        // guess check
        var strip = function (s) { return String(s).replace(/\s+/g, "").replace(/'/g, '"').replace(/"/g, ""); };
        function check() {
            var g = $("#guess").value, msg = $("#msg");
            if (!g.trim()) { msg.className = "msg"; msg.textContent = "Նախ գրիր պատասխանը։"; return; }
            if (strip(g) === strip(js(c.res))) {
                msg.className = "msg good"; msg.textContent = "Ճիշտ է։ Արդյունքը՝ " + js(c.res);
                state.hidden = false; drawResult();
                if (!learned.has(m.id)) { learned.add(m.id); saveLearned(); updateProgress(); renderNav(); $("#btnLearn").textContent = "✓ Սովորած"; $("#btnLearn").className = "btn done"; }
            } else {
                msg.className = "msg bad"; msg.textContent = "Դեռ ոչ։ Նորից կարդա նկարագրությունը կամ սեղմիր «Ցույց տուր պատասխանը»։";
            }
        }
        $("#btnGuess").addEventListener("click", check);
        $("#guess").addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });

        // editor
        var ta = $("#code"), out = $("#out");
        function run() { showOut(out, runCode(ta.value)); }
        $("#btnRun").addEventListener("click", run);
        $("#btnReset").addEventListener("click", function () { ta.value = buildCode(m); run(); });
        ta.addEventListener("keydown", function (e) { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); run(); } });
        run();
    }

    // ---------- compare view ----------
    function sideHTML(s, c0, v) {
        var a = clone(c0.arr), before = clone(c0.arr), res, err = null;
        try { res = s.fn(a); } catch (e) { err = e; }
        var mutated = JSON.stringify(before) !== JSON.stringify(a);
        var h = '<div class="side"><div class="callrow"><code>' + esc(s.call) + "</code></div>";
        h += "<div><div class=\"rowlabel\">Վերադարձնում է</div>" + (err ? '<p class="msg bad">' + esc(err.message) + "</p>" : valueHTML(res, false)) + "</div>";
        h += '<div><div class="rowlabel"><code>' + esc(v) + "</code> հետո " + verdictHTML(mutated) + "</div>" + cellsHTML(a, { base: mutated ? before : null }) + "</div></div>";
        return h;
    }
    function renderCompare() {
        var h = '<section class="panel"><h2 class="mname" style="font-family:var(--f-head);font-weight:800">Համեմատություններ</h2>' +
            '<p class="desc">Նման մեթոդները կողք կողքի՝ նույն սկզբնական զանգվածով։ Նարնջագույն վանդակները ցույց են տալիս, թե ինչը փոխվեց բուն զանգվածում։</p></section><div class="cmpgrid">';
        CMP.forEach(function (c) {
            h += '<section class="panel cmpcard"><h2>' + esc(c.t) + "</h2><p>" + esc(c.text) + "</p>" +
                '<div class="rowlabel">Սկզբում <code>' + esc(c.v) + "</code></div>" + cellsHTML(c.arr, {}) +
                '<div class="cmpcols" style="margin-top:14px">' + sideHTML(c.a, c, c.v) + sideHTML(c.b, c, c.v) + "</div></section>";
        });
        $("#detail").innerHTML = h + "</div>";
    }

    // ---------- routing ----------
    var first = true;
    function route() {
        var id = (location.hash || "").slice(1);
        var known = id === "compare" || M.some(function (m) { return m.id === id; });
        state.cur = known ? id : "at";
        state.hidden = false;
        renderNav();
        if (state.cur === "compare") renderCompare(); else renderMethod(state.cur);
        if (!first && window.innerWidth <= 860) { try { $("#detail").scrollIntoView({ block: "start" }); } catch (e) { /* ignore */ } }
        else if (!first) { window.scrollTo(0, 0); }
        first = false;
    }

    buildSelect();
    updateProgress();
    $("#q").addEventListener("input", function (e) { state.q = e.target.value; renderNav(); });
    $("#g").addEventListener("change", function (e) { state.g = e.target.value; renderNav(); });
    window.addEventListener("hashchange", route);
    route();
})();