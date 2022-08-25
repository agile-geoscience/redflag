Search.setIndex({"docnames": ["_notebooks/Basic_usage", "_notebooks/Using_redflag_with_sklearn", "authors", "changelog", "contributing", "development", "index", "installation", "license", "redflag"], "filenames": ["_notebooks/Basic_usage.ipynb", "_notebooks/Using_redflag_with_sklearn.ipynb", "authors.md", "changelog.md", "contributing.md", "development.md", "index.rst", "installation.md", "license.md", "redflag.rst"], "titles": ["\ud83d\udea9 Basic usage", "\ud83d\udea9 Using <code class=\"docutils literal notranslate\"><span class=\"pre\">redflag</span></code> with <code class=\"docutils literal notranslate\"><span class=\"pre\">sklearn</span></code>", "Authors", "Changelog", "Contributing", "Development", "Redflag: An Entrance Exam for Data", "\ud83d\udea9 Installation", "License", "redflag package"], "terms": {"welcom": 0, "redflag": [0, 3, 5, 7], "It": [0, 5, 9], "": [0, 1, 3, 4, 5, 8, 9], "still": [0, 1, 3], "earli": [0, 3], "dai": 0, "thi": [0, 1, 3, 4, 5, 8, 9], "librari": 0, "ar": [0, 1, 3, 4, 5, 7, 8, 9], "few": [0, 1], "thing": [0, 1], "you": [0, 1, 3, 4, 5, 7, 8, 9], "can": [0, 1, 3, 4, 5, 9], "do": [0, 3, 6, 8], "detect": [0, 1, 3, 9], "label": [0, 1, 9], "ani": [0, 1, 3, 8, 9], "other": [0, 1, 3, 4, 5, 8, 9], "categor": [0, 1], "variabl": [0, 1, 9], "rf": [0, 1], "__version__": 0, "0": [0, 1, 8, 9], "1": [0, 1, 8, 9], "9rc3": 0, "panda": [0, 1], "pd": [0, 1, 9], "df": [0, 1], "read_csv": [0, 1], "http": [0, 1, 8, 9], "geocomp": [0, 1], "s3": [0, 1], "amazonaw": [0, 1], "com": [0, 1], "panoma_training_data": [0, 1], "csv": [0, 1], "look": [0, 1], "transpos": 0, "summari": 0, "each": [0, 1, 6, 8, 9], "column": [0, 1, 9], "datafram": [0, 6], "i": [0, 1, 3, 4, 5, 8, 9], "row": [0, 9], "here": [0, 1, 4], "describ": [0, 8], "t": [0, 1, 3, 5, 9], "count": [0, 1, 9], "mean": [0, 1, 8, 9], "std": 0, "min": [0, 9], "25": [0, 1, 9], "50": [0, 8], "75": [0, 9], "max": [0, 1, 9], "depth": [0, 1], "3966": 0, "882": 0, "674555": 0, "40": [0, 9], "150056": 0, "784": 0, "402800": 0, "858": 0, "012000": 0, "888": 0, "339600": 0, "913": 0, "028400": 0, "963": 0, "320400": 0, "relpo": [0, 1], "524999": 0, "286375": 0, "010000": 0, "282000": 0, "531000": 0, "773000": 0, "000000": 0, "marin": [0, 1], "325013": 0, "589539": 0, "2": [0, 1, 8, 9], "gr": [0, 1, 9], "64": 0, "367899": 0, "28": 0, "414603": 0, "12": [0, 1, 9], "036000": 0, "45": [0, 1, 9], "311250": 0, "840000": 0, "78": [0, 1], "809750": 0, "200": [0, 1, 9], "ild": [0, 1], "5": [0, 1, 9], "240308": 0, "3": [0, 1, 7, 9], "190416": 0, "340408": 0, "169567": 0, "4": [0, 1, 9], "305266": 0, "6": [0, 1, 9], "664234": 0, "32": 0, "136605": 0, "deltaphi": [0, 1], "469088": 0, "922310": 0, "21": 0, "832000": 0, "292500": 0, "124750": 0, "18": 0, "600000": 0, "phind": [0, 1], "13": [0, 1], "008807": 0, "936391": 0, "550000": 0, "8": [0, 1, 9], "196250": 0, "11": [0, 1, 9], "781500": 0, "16": 0, "050000": 0, "52": 0, "369000": 0, "pe": [0, 1], "686427": 0, "815113": 0, "200000": 0, "123000": 0, "514500": 0, "241750": 0, "094000": 0, "faci": [0, 1], "471004": 0, "406180": 0, "9": [0, 1, 7, 8, 9], "latitud": [0, 1], "37": [0, 1], "632575": 0, "299398": 0, "180732": 0, "356426": 0, "500380": 0, "910583": 0, "38": 0, "063373": 0, "longitud": [0, 1], "101": 0, "294895": 0, "230454": 0, "646452": 0, "389189": 0, "325130": 0, "106045": 0, "100": [0, 1, 9], "987305": [0, 1], "ild_log10": [0, 1], "648860": 0, "251542": 0, "468000": 0, "501000": 0, "634000": 0, "823750": 0, "507000": 0, "rhob": [0, 1], "2288": 0, "861692": 0, "218": 0, "038459": 0, "1500": 0, "2201": 0, "007475": 0, "2342": 0, "202051": 0, "2434": 0, "166399": 0, "2802": 0, "871147": 0, "first": [0, 1, 5, 9], "we": [0, 1, 4, 9], "ll": [0, 1], "measur": [0, 1, 9], "target": [0, 1, 3, 6], "us": [0, 3, 5, 6, 7, 8, 9], "class_imbal": [0, 3], "For": [0, 1, 7, 8, 9], "binari": [0, 9], "imbalac": 0, "ratio": [0, 9], "between": [0, 9], "major": [0, 9], "minor": [0, 1, 9], "class": [0, 1, 3, 6, 9], "multiclass": [0, 9], "degre": [0, 9], "ortigosa": [0, 9], "hernandez": [0, 9], "et": [0, 9], "al": [0, 9], "2017": [0, 9], "singl": [0, 1, 9], "valu": [0, 1, 9], "explain": 0, "how": [0, 1, 3, 4], "mani": [0, 1, 9], "b": [0, 8, 9], "skew": 0, "support": [0, 1, 8], "imbalance_degre": [0, 9], "lithologi": [0, 1], "378593040846633": 0, "get": [0, 5, 9], "which": [0, 1, 3, 5, 8, 9], "those": [0, 1, 8], "fewer": 0, "sampl": [0, 1, 9], "than": [0, 1, 9], "expect": [0, 1, 9], "These": [0, 3], "return": [0, 1, 9], "order": [0, 1, 2, 9], "smallest": 0, "minority_class": [0, 1, 9], "dolomit": [0, 1], "sandston": [0, 1], "mudston": [0, 1], "wackeston": [0, 1], "dtype": [0, 1, 9], "u10": 0, "empir": [0, 1, 9], "observ": 0, "frequenc": 0, "\u03b6": [0, 9], "e": [0, 1, 7, 9], "empirical_distribut": [0, 9], "39989914": 0, "18582955": 0, "15834594": 0, "04790721": 0, "13691377": 0, "07110439": 0, "same": [0, 9], "uniqu": [0, 9], "note": [0, 1, 9], "differ": [0, 1, 8, 9], "from": [0, 1, 8, 9], "np": [0, 9], "sort": [0, 9], "siltston": [0, 1], "limeston": [0, 1], "object": [0, 1, 3, 8], "also": [0, 1, 3, 5, 7, 9], "inspect": [0, 3], "displai": [0, 8], "ax": 0, "value_count": 0, "plot": 0, "kind": [0, 1, 8], "bar": 0, "add": [0, 1, 4, 5, 8, 9], "line": [0, 7], "level": [0, 1, 9], "all": [0, 1, 3, 5, 7, 8, 9], "axhlin": 0, "len": [0, 9], "c": [0, 1, 8, 9], "r": [0, 9], "matplotlib": 0, "line2d": 0, "0x7efd0e60ac20": 0, "The": [0, 1, 2, 3, 5, 8, 9], "get_outli": [0, 1, 3, 9], "function": [0, 1, 3, 5, 9], "indic": [0, 1, 8, 9], "point": [0, 1, 9], "301": 0, "302": 0, "303": 0, "415": 0, "416": 0, "417": 0, "418": 0, "799": 0, "896": 0, "897": 0, "898": 0, "899": 0, "996": 0, "997": 0, "1843": 0, "1844": 0, "2278": 0, "2279": 0, "2280": 0, "2638": 0, "2639": 0, "2640": 0, "2641": 0, "2642": 0, "2643": 0, "2920": 0, "2921": 0, "2922": 0, "3070": 0, "3071": 0, "3074": 0, "3075": 0, "3076": 0, "3079": 0, "3080": 0, "3081": 0, "3580": 0, "3581": 0, "3582": 0, "3583": 0, "see": [0, 1, 4, 5, 9], "where": [0, 8, 9], "lie": [0, 9], "seaborn": [0, 1], "sn": [0, 1], "kdeplot": [0, 1], "rugplot": 0, "loc": [0, 1, 9], "c1": 0, "lw": 0, "alpha": 0, "axessubplot": [0, 1], "xlabel": [0, 1], "ylabel": [0, 1], "densiti": [0, 3, 9], "By": [0, 4, 9], "default": [0, 1, 9], "an": [0, 1, 3, 4, 8, 9], "isol": [0, 1, 9], "forest": [0, 1, 9], "99": [0, 1, 9], "confid": [0, 1, 9], "opt": 0, "local": [0, 5, 9], "factor": [0, 9], "ellipt": [0, 9], "envelop": [0, 9], "mahalanobi": [0, 3, 9], "distanc": [0, 1, 3, 9], "set": [0, 1, 9], "choos": [0, 8], "equival": [0, 9], "threshold": [0, 1, 9], "number": [0, 1, 9], "standard": [0, 1, 9], "deviat": [0, 1, 9], "awai": [0, 1], "regard": [0, 8], "signal": 0, "accept": [0, 8], "univari": [0, 3, 9], "multivari": [0, 1, 3, 9], "method": [0, 1, 3, 9], "mah": [0, 1, 9], "jointplot": 0, "x": [0, 1, 9], "y": [0, 1, 9], "hue": 0, "index_to_bool": [0, 9], "n": [0, 7, 9], "axisgrid": 0, "jointgrid": 0, "0x7efd05b3e650": 0, "A": [0, 1, 8, 9], "helper": [0, 3], "comput": [0, 8, 9], "given": [0, 1, 6, 9], "dataset": [0, 1, 3, 6, 9], "size": [0, 9], "assum": [0, 8, 9], "gaussian": [0, 1, 9], "print": [0, 9], "f": 0, "have": [0, 1, 2, 8, 9], "expected_outli": [0, 1, 9], "80": [0, 1, 9], "44": 0, "so": [0, 1, 3, 5, 6], "more": [0, 1, 3, 5, 8, 9], "becaus": [0, 1, 3, 9], "ha": [0, 1, 5, 8, 9], "lot": [0, 1, 3, 9], "truncat": 0, "tail": 0, "test": [0, 1, 3, 7, 9], "directli": [0, 1, 9], "has_outli": [0, 3, 9], "compar": [0, 1, 9], "result": [0, 1, 3, 8, 9], "numpi": [0, 9], "random": [0, 1, 9], "normal": [0, 5, 8, 9], "10_000": [0, 9], "d": [0, 1, 5, 8, 9], "p": [0, 1, 9], "displot": [0, 1], "facetgrid": 0, "0x7efd05bc26e0": 0, "onli": [0, 1, 3, 8, 9], "about": [0, 5, 6, 9], "60": 0, "10": [0, 1, 9], "000": [0, 1, 9], "record": [0, 1, 9], "fals": [0, 9], "If": [0, 1, 4, 5, 7, 8, 9], "been": [0, 8], "multipl": [0, 3, 9], "instanc": [0, 9], "its": [0, 3, 8, 9], "There": [0, 1, 4, 5], "legitim": 0, "reason": [0, 1, 8], "why": 0, "might": [0, 1], "happen": [0, 5], "exampl": [0, 1, 3, 4, 5, 8, 9], "mai": [0, 1, 8, 9], "natur": [0, 1], "bound": 0, "g": [0, 1, 7, 9], "poros": 0, "alwai": [0, 3], "greater": 0, "deliber": [0, 8], "part": [0, 1, 4, 8, 9], "prepar": [0, 8], "process": 0, "is_clip": [0, 3, 9], "true": [0, 1, 9], "0x7efd039818a0": 0, "tri": 0, "guess": 0, "follow": [0, 2, 5, 8, 9], "scipi": [0, 9], "stat": [0, 9], "norm": [0, 9], "cosin": 0, "expon": 0, "exponpow": 0, "gamma": 0, "gumbel_l": 0, "gumbel_r": 0, "powerlaw": 0, "triang": [0, 9], "trapz": 0, "uniform": [0, 9], "name": [0, 1, 3, 8, 9], "along": [0, 8], "paramet": [0, 1, 9], "locat": [0, 1, 9], "scale": [0, 1, 9], "In": [0, 1, 8, 9], "spite": 0, "find": [0, 1, 3, 9], "nearli": 0, "best_distribut": [0, 9], "36789939485628": 0, "411020184908292": 0, "contrast": 0, "andbest": 0, "model": [0, 1, 9], "gumbel": 0, "040572536302586": 0, "934329727517257": 0, "0x7efd018f3c40": 0, "often": 0, "like": [0, 1, 5, 9], "implicit": 0, "our": [0, 9], "across": [0, 9], "variou": [0, 3], "respect": [0, 4], "both": [0, 5, 9], "wasserstein": [0, 1, 3, 9], "facilit": 0, "calcul": [0, 9], "aka": [0, 9], "earth": [0, 1], "mover": [0, 1], "train": [0, 1, 9], "score": [0, 3, 9], "interpret": 0, "substanti": 0, "well": [0, 1], "w": 0, "25985545": 0, "28404634": 0, "49139232": 0, "33701782": 0, "22736457": 0, "13473663": 0, "33672956": 0, "20969657": 0, "41216725": 0, "34568777": 0, "39729747": 0, "48092099": 0, "0801856": 0, "10675027": 0, "13740318": 0, "10325295": 0, "19913347": 0, "21828753": 0, "26995735": 0, "33063277": 0, "24612402": 0, "23889923": 0, "26699721": 0, "2350674": 0, "20666445": 0, "44112543": 0, "16229232": 0, "63527036": 0, "18187639": 0, "34992043": 0, "19400917": 0, "74988182": 0, "31761526": 0, "27206283": 0, "30255291": 0, "24779581": 0, "could": [0, 1], "heatmap": 0, "yticklabel": 0, "xticklabel": 0, "show": [0, 1, 3, 9], "u": [0, 9], "log": [0, 1], "7": [0, 1, 9], "somewhat": 0, "anomal": [0, 6], "suggest": [0, 9], "cross": [0, 8, 9], "h": 0, "cattl": 0, "sklearn": [0, 3, 6], "model_select": 0, "train_test_split": 0, "preprocess": [0, 1], "standardscal": [0, 1], "x_train": [0, 1, 9], "x_": 0, "test_siz": 0, "random_st": [0, 9], "42": 0, "re": [0, 1, 4, 9], "illustr": 0, "purpos": [0, 8], "valid": [0, 9], "wai": [0, 1, 3, 4, 5, 9], "indeped": 0, "x_val": [0, 9], "x_test": [0, 1], "should": [0, 1, 5, 9], "scaler": 0, "fit_transform": [0, 9], "transform": [0, 3, 6, 8, 9], "case": [0, 3, 9], "pass": [0, 1, 9], "them": [0, 1, 9], "list": [0, 8, 9], "tupl": [0, 9], "03860982": 0, "02506236": 0, "04321734": 0, "03437337": 0, "04402681": 0, "02528225": 0, "0385111": 0, "05694201": 0, "04388196": 0, "049464": 0, "05560379": 0, "04002712": 0, "quit": [0, 3], "low": 0, "randomli": [0, 1], "correl": [0, 1, 9], "lag": 0, "shift": [0, 1], "version": [0, 1, 3, 5, 8], "itself": [0, 1, 4, 9], "sever": [0, 4], "themselv": [0, 1, 9], "is_correl": [0, 9], "depend": [0, 3, 7, 9], "That": [0, 9], "shuffl": 0, "remov": [0, 1, 3], "doe": [0, 1, 8, 9], "to_numpi": 0, "copi": [0, 8], "know": [0, 1], "most": [0, 5, 9], "seri": 0, "your": [0, 1, 8], "assess": [0, 9], "averag": [0, 9], "To": [0, 1, 9], "serv": [0, 3], "control": [0, 8], "let": [0, 1], "small": [0, 1, 9], "come": [0, 3, 9], "veri": [0, 1], "close": 0, "zero": [0, 9], "classif": [0, 9], "task": [0, 9], "imagin": 0, "try": [0, 1, 9], "predict": [0, 1, 3, 9], "feature_import": [0, 3, 9], "22244563": 0, "3001791": 0, "2310482": 0, "20710688": 0, "03922019": 0, "tell": [0, 9], "cr": 0, "distant": 0, "last": [0, 9], "now": [0, 3], "regress": [0, 3, 9], "includ": [0, 3, 6, 8], "08824211": 0, "42052504": 0, "46117483": 0, "03005802": 0, "21870888": 0, "07966517": 0, "15": [0, 9], "63517221": 0, "less": [0, 9], "again": 0, "least": [0, 8], "As": 1, "basic_usag": [1, 3], "ipynb": [1, 3], "some": [1, 3, 4, 6, 9], "possibl": [1, 5, 8], "issu": [1, 3, 4, 8], "data": [1, 3, 9], "thei": [1, 3, 9], "rais": [1, 9], "red": 1, "flag": [1, 9], "load": [1, 6], "import": [1, 3, 4, 6, 8], "head": 1, "format": [1, 9], "mineralogi": 1, "siliciclast": 1, "shrimplin": 1, "851": 1, "3064": 1, "a1": 1, "sh": 1, "77": 1, "613176": 1, "915": 1, "978076": 1, "664": 1, "2393": 1, "499945": 1, "4588": 1, "979": 1, "26": 1, "581419": 1, "14": 1, "565": 1, "661": 1, "2416": 1, "119814": 1, "6112": 1, "957": 1, "79": 1, "05": [1, 9], "549881": 1, "050": 1, "658": 1, "2404": 1, "576056": 1, "7636": 1, "936": 1, "86": 1, "518559": 1, "115": 1, "655": 1, "249071": 1, "9160": 1, "74": 1, "58": 1, "436086": 1, "300": 1, "647": 1, "2382": 1, "602601": 1, "featur": [1, 3, 4, 6, 9], "independ": [1, 3, 6], "furthermor": 1, "clip": [1, 3, 6, 9], "histplot": 1, "split": [1, 3, 9], "group": [1, 3, 9], "test_wel": 1, "crawford": 1, "stuart": 1, "test_flag": 1, "isin": 1, "y_test": 1, "y_train": [1, 9], "contain": [1, 5, 8, 9], "At": [1, 7], "time": [1, 9], "write": [1, 4, 8], "three": [1, 9], "compon": [1, 9], "grow": 1, "step": [1, 9], "x27": 1, "imbal": [1, 3, 6], "outlier": [1, 3, 6], "distribut": [1, 3, 6, 8], "jupyt": 1, "environ": [1, 7], "pleas": [1, 4, 5, 7], "rerun": 1, "cell": 1, "html": [1, 5], "represent": 1, "trust": 1, "notebook": [1, 3], "On": 1, "github": [1, 5, 6], "unabl": 1, "render": 1, "page": [1, 5, 6], "nbviewer": 1, "org": [1, 8, 9], "pipelinepipelin": 1, "imbalancedetectorimbalancedetector": 1, "clipdetectorclipdetector": 1, "correlationdetectorcorrelationdetector": 1, "outlierdetectoroutlierdetector": 1, "distributioncomparatordistributioncompar": 1, "anoth": [1, 4, 9], "make_pipelin": [1, 9], "svm": [1, 9], "svc": 1, "pipe": [1, 9], "standardscalerstandardscal": 1, "svcsvc": 1, "dure": [1, 9], "fit": [1, 8, 9], "phase": 1, "check": [1, 3, 9], "input": [1, 9], "self": [1, 9], "learn": [1, 6, 9], "later": [1, 9], "comparison": [1, 3], "imbalanc": [1, 9], "420": 1, "400": 1, "349": 1, "v": [1, 9], "31": [1, 9], "3682141715600706": 1, "when": [1, 9], "new": [1, 3, 4, 5], "two": [1, 5, 9], "categori": 1, "statist": 1, "30": [1, 9], "arrai": [1, 3, 9], "But": 1, "argument": [1, 3, 9], "redflag_pipelin": 1, "yet": 1, "chang": [1, 3, 8], "sensit": 1, "separ": [1, 8, 9], "construct": 1, "drop": 1, "leav": 1, "out": [1, 8], "don": [1, 5, 9], "think": 1, "too": [1, 9], "troubl": 1, "lower": 1, "20": [1, 9], "qualifi": 1, "trigger": 1, "final": 1, "minimum": 1, "requir": [1, 5, 8, 9], "rememb": 1, "longer": 1, "being": [1, 9], "run": [1, 3, 5, 9], "839": 1, "626": 1, "154443705823081": 1, "higher": 1, "fail": [1, 3], "y_pred": 1, "one": [1, 8, 9], "idea": 1, "class_count": [1, 9], "consid": [1, 4, 9], "usual": 1, "worri": 1, "concern": 1, "make": [1, 3, 4, 5, 8, 9], "option": [1, 5, 7, 9], "sure": 1, "seem": [1, 3, 9], "lose": 1, "dynam": 1, "rang": [1, 9], "daili": 1, "temperatur": 1, "europ": 1, "deg": 1, "cannot": [1, 8], "dealt": 1, "attenu": 1, "larg": [1, 4, 9], "sens": [1, 3, 9], "simpli": 1, "suspici": 1, "want": [1, 7, 9], "without": [1, 8], "perform": [1, 8, 9], "m": [1, 5, 9], "awar": 1, "research": 1, "contigu": 1, "space": [1, 9], "spatial": [1, 9], "rock": 1, "properti": 1, "etc": [1, 9], "call": [1, 9], "iid": [1, 6], "assumpt": [1, 6, 9], "particular": [1, 8], "One": 1, "big": 1, "pitfal": 1, "non": [1, 8], "must": [1, 8, 9], "inform": [1, 8], "leakag": 1, "thu": [1, 9], "over": [1, 9], "optimist": 1, "evaul": 1, "instead": [1, 3, 9], "date": [1, 8], "patient": 1, "id": [1, 9], "borehol": 1, "similar": 1, "implement": [1, 3, 9], "strategi": 1, "robust": [1, 9], "covari": [1, 9], "insensit": 1, "multi": [1, 9], "dimension": 1, "analog": [1, 9], "varianc": [1, 9], "certain": 1, "fall": 1, "far": 1, "centr": 1, "within": [1, 8, 9], "sd": [1, 9], "1000": [1, 9], "nois": 1, "futur": 1, "val": 1, "product": [1, 8], "shape": [1, 6, 9], "iso": [1, 9], "okai": 1, "keep": 1, "therefor": 1, "befor": [1, 9], "bin": [1, 9], "No": [1, 9], "emit": [1, 3], "evalu": 1, "were": 1, "turn": 1, "treatment": 1, "wuch": 1, "crack": 1, "sign": 1, "violat": 1, "ident": [1, 6, 9], "examin": 1, "current": [1, 3], "visual": 1, "someth": 1, "especi": 1, "just": [1, 3, 5, 9], "decid": [1, 9], "ignor": [1, 9], "forget": 1, "appli": [1, 8, 9], "domain": 1, "geograph": 1, "type": [1, 8, 9], "widget": 1, "select": 1, "give": [1, 3, 8], "peopl": 2, "contribut": [2, 6, 8], "project": [2, 4, 5], "alphabet": 2, "matt": 2, "hall": 2, "agil": [2, 4], "scientif": 2, "canada": 2, "orcid": 2, "0000": 2, "0002": 2, "4054": 2, "8295": 2, "soon": 3, "ad": 3, "experiment": 3, "warn": [3, 6, 9], "main": [3, 5], "ones": [3, 9], "clipdetector": [3, 9], "outlierdetector": [3, 9], "correlationdetector": [3, 9], "imbalancedetector": [3, 9], "distributioncompar": [3, 9], "test_redflag": 3, "py": [3, 5, 9], "file": [3, 5, 8], "wherea": 3, "doctest": [3, 5], "onc": 3, "pytest": [3, 5], "coverag": 3, "94": 3, "doc": [3, 7], "using_redflag_with_sklearn": 3, "pipelin": [3, 6, 9], "sinc": 3, "bit": 3, "code": [3, 8], "packag": [3, 6, 7], "hard": 3, "easier": 3, "excess": 3, "work": [3, 8], "reorgan": 3, "modul": [3, 6], "namespac": 3, "doesn": 3, "affect": 3, "exist": 3, "wa": [3, 8, 9], "confus": 3, "imbalance_ratio": [3, 9], "either": [3, 5, 8, 9], "conveni": [3, 9], "improv": [3, 4, 8], "oneclasssvm": 3, "ellipticenvelop": 3, "own": [3, 8], "reproduc": [3, 8], "zscore_outli": 3, "kde_peak": [3, 9], "peak": [3, 9], "kernel": [3, 9], "estim": [3, 9], "need": [3, 5, 9], "fit_kd": [3, 9], "get_kd": [3, 9], "find_large_peak": [3, 9], "bandwidth": [3, 9], "bw_silverman": [3, 9], "bw_scott": [3, 9], "overrid": 3, "fix": [3, 4], "bug": [3, 4], "is_continu": [3, 9], "using_redflag": 3, "has_nan": [3, 9], "has_monoton": [3, 9], "has_flat": [3, 9], "interpol": 3, "move": 3, "util": [3, 6], "eg": 3, "iter_group": [3, 9], "ecdf": [3, 9], "flatten": [3, 9], "stdev_to_proport": [3, 9], "proportion_to_stdev": [3, 9], "wrote": 3, "95": [3, 9], "has_low_distance_stdev": [3, 9], "has_few_sampl": [3, 9], "is_standard": [3, 9], "appear": [3, 8, 9], "z": [3, 9], "goe": 3, "document": [3, 4, 5, 7, 8], "ci": 3, "workflow": [3, 5], "stabl": 3, "mostli": 3, "flail": 3, "releas": [3, 5], "auto": [3, 9], "thank": 4, "help": [4, 5, 7], "submit": [4, 8], "report": 4, "request": [4, 5], "propos": 4, "pull": [4, 5], "typo": 4, "gener": [4, 5, 8, 9], "tutori": 4, "fortun": 4, "profession": 4, "commun": [4, 8], "mutual": 4, "consider": 4, "protect": 4, "everyon": 4, "everywher": 4, "read": [4, 5, 7], "wish": 4, "identifi": [4, 9], "author": [4, 6, 8], "yourself": 4, "md": [4, 5], "agre": [4, 8], "shall": [4, 8], "govern": 4, "term": [4, 8], "unless": [4, 8], "specif": 4, "agreement": [4, 8], "made": [4, 8, 9], "start": [5, 9], "pip": [5, 6, 7], "dev": [5, 7], "back": [5, 9], "cov": 5, "python": [5, 7], "run_test": 5, "docstr": 5, "folder": 5, "repo": 5, "pep": 5, "518": 5, "style": 5, "Then": 5, "tar": 5, "gz": 5, "whl": 5, "command": [5, 7], "cd": 5, "sphinx": 5, "manual": 5, "stuff": 5, "makefil": 5, "script": 5, "updat": 5, "publish": [5, 9], "action": 5, "push": 5, "upload": 5, "pypi": 5, "interfac": [5, 8], "fork": 6, "aim": 6, "automat": 6, "safeti": 6, "net": 6, "machin": 6, "ndarrai": [6, 9], "analys": 6, "aspect": 6, "pattern": 6, "threat": 6, "instal": 6, "carri": [6, 8], "explor": 6, "below": [6, 8, 9], "basic": 6, "usag": 6, "metric": [6, 9], "detector": 6, "what": [6, 9], "submodul": 6, "content": [6, 8], "develop": [6, 7], "licens": 6, "changelog": 6, "index": [6, 9], "search": [6, 9], "Or": 7, "conda": 7, "creat": 7, "activ": 7, "apach": 8, "januari": 8, "2004": 8, "www": 8, "AND": 8, "condit": 8, "FOR": 8, "reproduct": 8, "definit": [8, 9], "defin": [8, 9], "section": 8, "through": 8, "licensor": 8, "copyright": 8, "owner": 8, "entiti": 8, "grant": 8, "legal": 8, "union": 8, "act": 8, "under": 8, "common": [8, 9], "power": 8, "direct": 8, "indirect": 8, "caus": 8, "manag": 8, "whether": [8, 9], "contract": 8, "otherwis": [8, 9], "ii": 8, "ownership": 8, "fifti": 8, "percent": 8, "outstand": 8, "share": 8, "iii": 8, "benefici": 8, "individu": 8, "exercis": 8, "permiss": 8, "sourc": 8, "form": 8, "prefer": 8, "modif": 8, "limit": 8, "softwar": 8, "configur": 8, "mechan": 8, "translat": 8, "compil": 8, "convers": [8, 9], "media": 8, "authorship": 8, "avail": 8, "notic": 8, "attach": 8, "provid": 8, "appendix": 8, "deriv": 8, "base": [8, 9], "editori": 8, "revis": 8, "annot": 8, "elabor": 8, "repres": [8, 9], "whole": [8, 9], "origin": 8, "remain": 8, "mere": 8, "link": 8, "bind": 8, "thereof": 8, "addit": 8, "intention": 8, "inclus": 8, "behalf": 8, "electron": 8, "verbal": 8, "written": 8, "sent": 8, "mail": 8, "system": 8, "track": 8, "discuss": 8, "exclud": 8, "conspicu": 8, "mark": 8, "design": 8, "Not": [8, 9], "contributor": 8, "whom": 8, "receiv": 8, "subsequ": 8, "incorpor": 8, "subject": 8, "herebi": 8, "perpetu": 8, "worldwid": 8, "exclus": 8, "charg": 8, "royalti": 8, "free": 8, "irrevoc": 8, "publicli": 8, "sublicens": 8, "patent": 8, "except": 8, "state": [8, 9], "offer": 8, "sell": 8, "transfer": 8, "claim": 8, "necessarili": 8, "infring": 8, "alon": 8, "combin": [8, 9], "institut": 8, "litig": 8, "against": [8, 9], "counterclaim": 8, "lawsuit": 8, "alleg": 8, "constitut": 8, "contributori": 8, "termin": 8, "redistribut": 8, "medium": 8, "meet": 8, "recipi": 8, "modifi": 8, "promin": 8, "retain": 8, "trademark": 8, "attribut": 8, "pertain": 8, "text": 8, "readabl": 8, "place": 8, "wherev": 8, "third": [8, 9], "parti": 8, "alongsid": 8, "addendum": 8, "constru": 8, "statement": 8, "compli": 8, "submiss": 8, "explicitli": 8, "notwithstand": 8, "abov": [8, 9], "noth": 8, "herein": 8, "supersed": 8, "execut": 8, "trade": 8, "servic": 8, "customari": 8, "disclaim": 8, "warranti": 8, "applic": 8, "law": 8, "AS": 8, "basi": 8, "OR": 8, "OF": 8, "express": 8, "impli": 8, "titl": 8, "merchant": 8, "sole": 8, "respons": 8, "determin": [8, 9], "appropri": 8, "risk": 8, "associ": 8, "liabil": 8, "event": [8, 9], "theori": 8, "tort": 8, "neglig": 8, "grossli": 8, "liabl": 8, "damag": 8, "special": 8, "incident": 8, "consequenti": 8, "charact": 8, "aris": 8, "inabl": 8, "loss": 8, "goodwil": 8, "stoppag": 8, "failur": 8, "malfunct": 8, "commerci": 8, "even": 8, "advis": 8, "while": 8, "fee": 8, "indemn": 8, "oblig": 8, "right": 8, "consist": 8, "howev": 8, "indemnifi": 8, "defend": 8, "hold": 8, "harmless": 8, "incur": 8, "assert": 8, "end": [8, 9], "relat": 9, "understand": 9, "none": 9, "best": 9, "int": 9, "histogram": 9, "8771812708978117": 9, "5001419889107208": 9, "3286356643172673": 9, "3406453953773365": 9, "scott": 9, "float": 9, "ab": 9, "6162678270732356": 9, "1e": 9, "silverman": 9, "581810759152688": 9, "cv_kde": 9, "n_bandwidth": 9, "cv": 9, "grid": 9, "optim": 9, "fold": 9, "290905379576344": 9, "largest": 9, "amplitud": 9, "cut": 9, "off": 9, "smaller": 9, "x_peak": 9, "y_peak": 9, "19": 9, "str": 9, "kde": 9, "011092399847113": 9, "rule": 9, "thumb": 9, "0015627693633590066": 9, "09": 9, "05778894": 9, "74120603": 9, "15929031": 9, "24708215": 9, "ovr": 9, "reduc": 9, "ovo": 9, "per": 9, "full": 9, "lambda": 9, "axi": 9, "wasserstein_ovo": 9, "2d": 9, "sequenc": 9, "latter": 9, "implicitli": 9, "func": 9, "bool": 9, "reshap": 9, "97490053": 9, "1392715": 9, "11417203": 9, "69635752": 9, "22475": 9, "39754762": 9, "71161667": 9, "24495": 9, "match": 9, "k": 9, "would": 9, "squareform": 9, "squar": 9, "matrix": 9, "55708601": 9, "39271504": 9, "83562902": 9, "wasserstein_ovr": 9, "rest": 9, "counter": 9, "recommend": 9, "omit": 9, "dict": 9, "encount": 9, "diverg": 9, "helling": 9, "discret": 9, "probabl": 9, "string": 9, "euclidean": 9, "manhattan": 9, "kl": 9, "tv": 9, "hand": 9, "actual": 9, "refer": 9, "zeta": 9, "equat": 9, "length": 9, "discov": 9, "furthest_distribut": 9, "ir": 9, "furthest": 9, "reflect": 9, "integ": 9, "minu": 9, "fraction": 9, "accord": 9, "eq": 9, "mathrm": 9, "frac": 9, "d_": 9, "delta": 9, "mathbf": 9, "iota": 9, "_m": 9, "l1": 9, "l2": 9, "total": 9, "variat": 9, "kullback": 9, "leibner": 9, "generate_data": 9, "288": 9, "49": 9, "round": 9, "76": 9, "629": 9, "333": 9, "511": 9, "81": 9, "61": 9, "73": 9, "65": 9, "problem": 9, "major_minor": 9, "maj": 9, "logist": 9, "permut": 9, "lasso": 9, "unsupervis": 9, "cluster": 9, "highest": 9, "kept": 9, "infer": 9, "35": 9, "55": 9, "97811006": 9, "19385077": 9, "89013985": 9, "55680651": 9, "chunk": 9, "137": 9, "contamin": 9, "approxim": 9, "scikit": 9, "lof": 9, "ee": 9, "mahanalobi": 9, "inlier": 9, "convent": 9, "four": 9, "boolean": 9, "int64": 9, "33": 9, "multipli": 9, "correct": 9, "rousseeuw": 9, "van": 9, "driessen": 9, "n_sampl": 9, "n_featur": 9, "6583124": 9, "1055416": 9, "5527708": 9, "01173463": 9, "67448975": 9, "33724488": 9, "mahalanobis_outli": 9, "stdev": 9, "api": 9, "outsid": 9, "70": 9, "89163847": 9, "million": 9, "datapoint": 9, "billion": 9, "1d": 9, "core": 9, "baseredflagdetector": 9, "kwarg": 9, "baseestim": 9, "transformermixin": 9, "continu": 9, "suspect": 9, "rng": 9, "default_rng": 9, "stack": 9, "sin": 9, "linspac": 9, "38077051": 9, "42977406": 9, "05260728": 9, "92571458": 9, "81188195": 9, "7482485": 9, "84147098": 9, "warn_if_zero": 9, "memori": 9, "expens": 9, "anyth": 9, "present": 9, "bother": 9, "up": 9, "multivariateoutlierdetector": 9, "mutlivari": 9, "univariateoutlierdetector": 9, "1_000": 9, "12573022": 9, "13210486": 9, "64042265": 9, "10490012": 9, "53566937": 9, "36159505": 9, "24972527": 9, "75063397": 9, "55581573": 9, "01881162": 9, "90942756": 9, "36922933": 9, "covarianc": 9, "specifi": 9, "instanti": 9, "togeth": 9, "formatwarn": 9, "messag": 9, "arg": 9, "custom": 9, "is_binari": 9, "exactli": 9, "param": 9, "vector": 9, "arr": 9, "suit": 9, "is_multiclass": 9, "is_multioutput": 9, "output": 9, "typeerror": 9, "dimens": 9, "traceback": 9, "recent": 9, "n_class": 9, "bool_to_index": 9, "cond": 9, "get_idx": 9, "consecut": 9, "stepsiz": 9, "coeffici": 9, "decim": 9, "5163977794943222": 9, "downsampl": 9, "cdf": 9, "switch": 9, "weight": 9, "mid": 9, "halfwai": 9, "formal": 9, "unbias": 9, "sometim": 9, "take": 9, "everi": 9, "85": 9, "l": 9, "toler": 9, "flat": 9, "maximum": 9, "allow": 9, "interv": 9, "atol": 9, "rel": 9, "monoton": 9, "nan": 9, "idx": 9, "convert": 9, "element": 9, "is_numer": 9, "numer": 9, "word": 9, "faster": 9, "isclos": 9, "\u03bc": 9, "\u03c3": 9, "entir": 9, "allclos": 9, "absolut": 9, "iter": 9, "yield": 9, "mask": 9, "ordered_uniqu": 9, "item": 9, "unord": 9, "fast": 9, "reli": 9, "job": 9, "slow": 9, "1000000000": 9, "invers": 9, "magnif": 9, "hyperellipsoid": 9, "sdhe": 9, "proport": 9, "2816": 9, "tabl": 9, "doi": 9, "1371": 9, "journal": 9, "pone": 9, "0118537": 9, "decent": 9, "precis": 9, "1e9": 9, "575829302496098": 9, "90": 9, "039137525465009": 9, "8000000000000003": 9, "split_and_standard": 9, "seed": 9, "y_val": 9, "whose": 9, "68": 9, "27": 9, "39": 9, "good": 9, "signific": 9, "figur": 9, "beta": 9, "paper": 9, "poseidon": 9, "csd": 9, "auth": 9, "pdf": 9, "ververidis08a": 9, "exact": 9, "6826894921370859": 9, "6826894916531445": 9, "9973002039367398": 9, "9973002039633309": 9, "39346933952920327": 9, "9946544947734935": 9, "zscore": 9, "54919334": 9, "161895": 9, "77459667": 9, "38729833": 9}, "objects": {"": [[9, 0, 0, "-", "redflag"]], "redflag": [[9, 0, 0, "-", "distributions"], [9, 0, 0, "-", "imbalance"], [9, 0, 0, "-", "importance"], [9, 0, 0, "-", "independence"], [9, 0, 0, "-", "outliers"], [9, 0, 0, "-", "redflag"], [9, 0, 0, "-", "sklearn"], [9, 0, 0, "-", "target"], [9, 0, 0, "-", "utils"]], "redflag.distributions": [[9, 1, 1, "", "best_distribution"], [9, 1, 1, "", "bw_scott"], [9, 1, 1, "", "bw_silverman"], [9, 1, 1, "", "cv_kde"], [9, 1, 1, "", "find_large_peaks"], [9, 1, 1, "", "fit_kde"], [9, 1, 1, "", "get_kde"], [9, 1, 1, "", "kde_peaks"], [9, 1, 1, "", "wasserstein"], [9, 1, 1, "", "wasserstein_ovo"], [9, 1, 1, "", "wasserstein_ovr"]], "redflag.imbalance": [[9, 1, 1, "", "class_counts"], [9, 1, 1, "", "divergence"], [9, 1, 1, "", "empirical_distribution"], [9, 1, 1, "", "furthest_distribution"], [9, 1, 1, "", "imbalance_degree"], [9, 1, 1, "", "imbalance_ratio"], [9, 1, 1, "", "major_minor"], [9, 1, 1, "", "minority_classes"]], "redflag.importance": [[9, 1, 1, "", "feature_importances"]], "redflag.independence": [[9, 1, 1, "", "is_correlated"]], "redflag.outliers": [[9, 1, 1, "", "expected_outliers"], [9, 1, 1, "", "get_outliers"], [9, 1, 1, "", "has_outliers"], [9, 1, 1, "", "is_correlated"], [9, 1, 1, "", "mahalanobis"], [9, 1, 1, "", "mahalanobis_outliers"]], "redflag.sklearn": [[9, 2, 1, "", "BaseRedflagDetector"], [9, 2, 1, "", "ClipDetector"], [9, 2, 1, "", "CorrelationDetector"], [9, 2, 1, "", "DistributionComparator"], [9, 2, 1, "", "ImbalanceDetector"], [9, 2, 1, "", "MultivariateOutlierDetector"], [9, 2, 1, "", "OutlierDetector"], [9, 2, 1, "", "UnivariateOutlierDetector"], [9, 1, 1, "", "formatwarning"]], "redflag.sklearn.BaseRedflagDetector": [[9, 3, 1, "", "fit"], [9, 3, 1, "", "transform"]], "redflag.sklearn.DistributionComparator": [[9, 3, 1, "", "fit"], [9, 3, 1, "", "fit_transform"], [9, 3, 1, "", "transform"]], "redflag.sklearn.ImbalanceDetector": [[9, 3, 1, "", "fit"], [9, 3, 1, "", "transform"]], "redflag.sklearn.MultivariateOutlierDetector": [[9, 3, 1, "", "fit"], [9, 3, 1, "", "transform"]], "redflag.sklearn.OutlierDetector": [[9, 3, 1, "", "fit"], [9, 3, 1, "", "fit_transform"], [9, 3, 1, "", "transform"]], "redflag.target": [[9, 1, 1, "", "is_binary"], [9, 1, 1, "", "is_continuous"], [9, 1, 1, "", "is_multiclass"], [9, 1, 1, "", "is_multioutput"], [9, 1, 1, "", "n_classes"]], "redflag.utils": [[9, 1, 1, "", "bool_to_index"], [9, 1, 1, "", "clipped"], [9, 1, 1, "", "consecutive"], [9, 1, 1, "", "cv"], [9, 1, 1, "", "ecdf"], [9, 1, 1, "", "flatten"], [9, 1, 1, "", "generate_data"], [9, 1, 1, "", "get_idx"], [9, 1, 1, "", "has_few_samples"], [9, 1, 1, "", "has_flat"], [9, 1, 1, "", "has_low_distance_stdev"], [9, 1, 1, "", "has_monotonic"], [9, 1, 1, "", "has_nans"], [9, 1, 1, "", "index_to_bool"], [9, 1, 1, "", "is_clipped"], [9, 1, 1, "", "is_numeric"], [9, 1, 1, "", "is_standardized"], [9, 1, 1, "", "iter_groups"], [9, 1, 1, "", "ordered_unique"], [9, 1, 1, "", "proportion_to_stdev"], [9, 1, 1, "", "split_and_standardize"], [9, 1, 1, "", "stdev_to_proportion"], [9, 1, 1, "", "zscore"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "method", "Python method"]}, "titleterms": {"basic": 0, "usag": 0, "load": 0, "some": 0, "data": [0, 6], "imbal": [0, 9], "metric": 0, "outlier": [0, 9], "clip": 0, "distribut": [0, 9], "shape": 0, "ident": 0, "assumpt": 0, "alreadi": 0, "split": 0, "out": 0, "group": 0, "arrai": 0, "independ": [0, 9], "featur": 0, "import": [0, 9], "us": 1, "redflag": [1, 6, 9], "sklearn": [1, 9], "pipelin": 1, "detector": 1, "transform": 1, "what": 1, "do": 1, "about": 1, "warn": 1, "imbalancedetector": 1, "clipdetector": 1, "correlationdetector": 1, "outlierdetector": 1, "distributioncompar": 1, "author": 2, "changelog": 3, "0": 3, "1": 3, "10": 3, "develop": [3, 5], "9": 3, "25": 3, "august": 3, "2022": 3, "8": 3, "juli": 3, "3": 3, "7": 3, "11": 3, "februari": 3, "2": 3, "31": 3, "januari": 3, "30": 3, "contribut": [4, 5], "code": 4, "conduct": 4, "authorship": 4, "licens": [4, 8], "instal": [5, 7], "test": 5, "build": 5, "packag": [5, 9], "doc": 5, "continu": 5, "integr": 5, "an": 6, "entranc": 6, "exam": 6, "quick": 6, "start": 6, "user": 6, "guid": 6, "api": 6, "refer": 6, "other": 6, "resourc": 6, "indic": 6, "tabl": 6, "submodul": 9, "modul": 9, "target": 9, "util": 9, "content": 9}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})