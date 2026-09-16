/* =========================================================
   Pro & Contra — International Academic Workshop 2028
   Vanilla JS: navigation, reveal, form validation, EN/AR
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) document.documentElement.classList.add("no-motion");

  /* ---------------------------------------------------------
     1. Translations (Arabic). English is read from the markup.
     --------------------------------------------------------- */
  var AR = {
    /* shared */
    "a11y.skip": "تخطَّ إلى المحتوى الرئيسي",
    "a11y.menu": "فتح القائمة",
    "brand.name": "مع وضدّ",
    "brand.sub": "ورشة أكاديمية دولية",
    "nav.home": "الرئيسية",
    "nav.about": "عن المبادرة",
    "nav.workshop": "الورشة",
    "nav.model": "النموذج الأكاديمي",
    "nav.contact": "تواصل",
    "close.title": "لنحوّل الحوار إلى بحث أكاديمي",
    "close.p": "هل تودّ الاطّلاع على المبادرة عن قرب؟",
    "close.cta": "تواصل معنا",
    "footer.title": "ورشة أكاديمية دولية مقترحة — سبتمبر ٢٠٢٨",
    "footer.by": "إعداد: أيمن الكناني",
    "footer.disclaimer": "يُذكر معهد ETH زيورخ وجامعة أكسفورد بوصفهما جهتين مضيفتين أو متعاونتين أكاديميتين مقترحتين فقط. لم تُبرم أي شراكة أو تأييد أو ترتيب استضافة أو اتفاق نشر أو ترتيب لإصدار شهادات، ما لم تؤكّد المؤسسة المعنية ذلك صراحةً.",
    "footer.rights": "أيمن الكناني. جميع الحقوق محفوظة.",

    /* index — meta + hero */
    "meta.title.index": "ورشة أكاديمية دولية | سبتمبر ٢٠٢٨",
    "meta.desc.index": "ورشة أكاديمية دولية ليوم واحد تجمع ٢٥ طالبًا للبحث والمناظرة والكتابة من وجهتَي نظر متقابلتين حول قضية عالمية واحدة.",
    "hero.kicker": "مبادرة أكاديمية مقترحة — سبتمبر ٢٠٢٨",
    "hero.title": "منتدى دولي للتفكير النقدي",
    "hero.lead": "ورشة أكاديمية ليوم واحد تجمع طلابًا من دول مختلفة لدراسة أسئلة عالمية معقّدة، ومناقشة وجهات النظر المتعارضة، وتحويل الأدلّة إلى أفكار.",
    "hero.cta1": "تعرّف على المبادرة",
    "hero.cta2": "ناقش التعاون معنا",
    "fact.1.v": "سبتمبر ٢٠٢٨",
    "fact.1.l": "الموعد المقترح",
    "fact.2.v": "٢٥ طالبًا",
    "fact.2.l": "من دول مختلفة",
    "fact.3.v": "٤ مشرفين أكاديميين أو أكثر",
    "fact.3.l": "ستوجَّه إليهم الدعوة ويُؤكَّد حضورهم لاحقًا",
    "fact.4.v": "مقالتان نهائيتان",
    "fact.4.l": "سؤال واحد، موقفان",
    "hero.note": "التعاون المحتمل مع معهد ETH زيورخ مرهون بموافقة الجامعة.",

    /* index — concept */
    "concept.title": "سؤال واحد. وجهتا نظر. تحدٍّ أكاديمي واحد.",
    "concept.lead": "يعمل جميع المشاركين على السؤال نفسه، وهو سؤال مختار بعناية في الاقتصاد أو السياسات العامة أو الشؤون الدولية. ما يختلف هو الجانب الذي يُطلب من كل مجموعة بناؤه، ومستوى الدقّة المطلوب في بنائه.",
    "concept.pro.title": "مع",
    "concept.pro.role": "الدفاع عن الطرح",
    "concept.pro.text": "تتولّى المجموعة الأولى بناء أقوى دفاع ممكن عن الفكرة أو السياسة أو الطرح المختار: تحديد ما يقوله الادّعاء فعليًا، وجمع الأدلّة المؤيّدة له، والردّ على الاعتراضات التي سيواجهها.",
    "concept.con.title": "ضدّ",
    "concept.con.role": "مساءلة الطرح",
    "concept.con.text": "تبني المجموعة الثانية أقوى حجّة ممكنة ضدّه: اختبار منطق الاستدلال، وفحص جودة الأدلّة، وكشف الافتراضات التي يقوم عليها، واقتراح ما قد يكون إجابة أفضل.",
    "concept.r1.t": "البحث",
    "concept.r1.p": "تبدأ المواقف من الأدبيات والبيانات، لا من الرأي الشخصي.",
    "concept.r2.t": "الأدلّة",
    "concept.r2.p": "كل ادّعاء يُردّ إلى مصدر يمكن فحصه والرجوع إليه.",
    "concept.r3.t": "الاستدلال الأكاديمي",
    "concept.r3.p": "الحجج منظّمة وواضحة ومفتوحة للمراجعة النقدية.",
    "concept.r4.t": "الحجج المضادة",
    "concept.r4.p": "على كل مجموعة عرض أقوى صيغة لحجّة الطرف الآخر قبل الردّ عليها.",

    /* index — process */
    "process.title": "اليوم، خطوة بخطوة",
    "process.lead": "يوم واحد مُنظّم بحيث تُنتج كل مرحلة المادة التي تحتاجها المرحلة التالية. لا شيء مرتجل: يصل الطلاب وقد استعدّوا، ويغادرون ومعهم مسوّدة.",
    "step.1.t": "البحث",
    "step.1.p": "قبل الورشة، تجمع كل مجموعة المصادر والبيانات والحجج السابقة حول السؤال المختار، مع إرشاد حول معايير الدليل الموثوق.",
    "step.2.t": "المساءلة",
    "step.2.p": "يسائل المشرفون والزملاء المادة المقدَّمة: ما الذي يُدّعى تحديدًا؟ وما الذي قد يدحضه؟ وأي الافتراضات تحمل العبء الحقيقي؟",
    "step.3.t": "المناظرة",
    "step.3.p": "تلتقي المجموعتان في تبادل منظّم ومحدّد بالوقت. على كل طرف أن يعرض موقف خصمه بدقّة قبل أن يردّ عليه.",
    "step.4.t": "الكتابة",
    "step.4.p": "تحوّل كل مجموعة موقفها إلى مقالة أكاديمية جماعية: أطروحة واضحة، وأدلّة موثّقة، ومعالجة صادقة لحدود الحجّة نفسها.",
    "step.5.t": "النشر",
    "step.5.p": "تُراجَع المسوّدات مع المشرفين الأكاديميين وتُنقَّح. ونأمل بحث إمكانية النشر عبر منصّة أكاديمية مناسبة، رهنًا بالموافقة التحريرية.",

    /* index — mentorship */
    "mentor.title": "بإشراف أكاديمي",
    "mentor.lead": "تهدف المبادرة إلى إشراك أربعة أساتذة أو باحثين أكاديميين على الأقل، يوجّهون الطلاب في البحث والنقاش وبناء الحجّة والكتابة. ستوجَّه الدعوات لاحقًا، ومشاركة المشرفين مرهونة بتوافرهم وبالموافقات المؤسسية. لم يُؤكَّد أي مشرف حتى هذه المرحلة.",
    "mentor.card.t": "مشرف أكاديمي",
    "mentor.card.m": "التخصّص الأكاديمي يُحدَّد لاحقًا",
    "mentor.card.1": "المجال المقترح: الاستدلال الاقتصادي واستخدام الأدلّة الكمّية.",
    "mentor.card.2": "المجال المقترح: تحليل السياسات العامة والقيود المؤسسية.",
    "mentor.card.3": "المجال المقترح: بناء الحجّة والمنهجية وأخلاقيات البحث.",
    "mentor.card.4": "المجال المقترح: الكتابة الأكاديمية ومراجعة مسوّدات الطلاب.",

    /* index — outcomes */
    "out.title": "ما الذي يخرج به الطلاب",
    "out.lead": "صُمّمت الورشة حول أربع قدرات تتجاوز أثرها يومًا واحدًا وسؤالًا واحدًا.",
    "out.1.t": "التفكير النقدي",
    "out.1.p": "التمييز بين ما يثبته المصدر فعلًا وما يكتفي بادّعائه.",
    "out.2.t": "المناظرة القائمة على الأدلّة",
    "out.2.p": "الاختلاف بدقّة وأمام الآخرين دون التخلّي عن الدليل.",
    "out.3.t": "الكتابة الأكاديمية",
    "out.3.p": "تحويل الحجّة الشفهية إلى نصّ منظّم قابل للاقتباس والتوثيق.",
    "out.4.t": "التعاون الدولي",
    "out.4.p": "بناء حجّة واحدة مع أشخاص تختلف افتراضاتهم الأولى عنك.",

    /* index — articles */
    "art.title": "مقالتان. وجهتا نظر.",
    "art.p1": "تتوّج الورشة بمقالتين أكاديميتين جماعيتين، تقدّم كل منهما وجهة نظر مدروسة ومؤسَّسة على بحث دقيق حول السؤال نفسه.",
    "art.p2": "وقراءة المقالتين معًا هي الحصيلة الحقيقية لليوم: توثيق لموضع الخلاف الفعلي، وللأدلّة التي يستند إليها كل طرف، وللأسئلة التي تبقى مفتوحة. وتُنسب كل مقالة إلى المجموعة التي أنتجتها كاملةً.",
    "art.note": "النشر المحتمل عبر منصّة أكاديمية مناسبة تابعة لمعهد ETH زيورخ سيكون مرهونًا بالمراجعة الأكاديمية والتحريرية.",

    /* index — ETH */
    "eth.title": "تعاون أكاديمي مقترح",
    "eth.p1": "نأمل بحث إمكانية أن يدعم معهد ETH زيورخ هذه المبادرة عبر الرعاية الأكاديمية، وتوفير مكان مناسب، والإشراف الأكاديمي، والإرشاد بشأن النشر ومنح شهادات المشاركة. وأي تعاون سيكون خاضعًا لسياسات المعهد وإجراءات الموافقة لديه.",
    "eth.a1": "رعاية أكاديمية",
    "eth.a2": "مكان مناسب لانعقاد الورشة",
    "eth.a3": "إشراف أكاديمي",
    "eth.a4": "إرشاد بشأن النشر",
    "eth.a5": "شهادات مشاركة",
    "eth.note": "لا شيء في هذه الصفحة يصف ترتيبًا قائمًا. يُذكر معهد ETH زيورخ هنا بوصفه جهة مضيفة ومتعاونة مقترحة فقط.",
    "eth.cta": "ناقش المبادرة معنا",

    /* index — partners */
    "partners.title": "الشركاء",
    "partners.lead": "من يقف خلف المبادرة اليوم، وأي المواقع ما زالت شاغرة. لا يُذكر هنا سوى ما تأكّد فعلًا.",
    "partners.senior.group": "الشريك الأول",
    "partners.senior.role": "شريك أول",
    "partners.senior.name": "أيمن الكناني",
    "partners.senior.p": "منظّم المبادرة والمسؤول عن تطويرها. وهذا هو موقع الشريك الأول الوحيد.",
    "partners.junior.group": "الشركاء المشاركون",
    "partners.junior.role": "شريك مشارك",
    "partners.junior.p": "لم يُشغَل هذا الموقع بعد، وسيُعلن عن الاسم فور تأكيده.",
    "partners.j1.name": "الشريك المشارك ١",
    "partners.j2.name": "الشريك المشارك ٢",
    "partners.j3.name": "الشريك المشارك ٣",
    "partners.status": "قريبًا",
    "partners.oxford.group": "تعاون محتمل",
    "partners.oxford.role": "قيد البحث",
    "partners.oxford.title": "تعاون محتمل مع جامعة أكسفورد",
    "partners.oxford.p": "التعاون المحتمل مع جامعة أكسفورد مرهون بموافقة الجامعة.",
    "partners.oxford.note": "لم تُبرم أو تُؤكَّد أي شراكة أو ارتباط أو تأييد. وتُذكر جامعة أكسفورد هنا بوصفها جهة متعاونة أكاديمية محتملة فقط.",

    /* about */
    "meta.title.about": "عن المبادرة | ورشة أكاديمية دولية ٢٠٢٨",
    "meta.desc.about": "النموذج الأكاديمي وراء ورشة دولية مقترحة ليوم واحد: سؤال واحد، وفريقان متقابلان، وإشراف أكاديمي، ومقالتان جماعيتان.",
    "about.kicker": "مبادرة أكاديمية مقترحة — سبتمبر ٢٠٢٨",
    "about.title": "عن المبادرة",
    "about.lead": "بناء بيئة يتحوّل فيها الاختلاف إلى فرصة لفهم أعمق.",
    "why.title": "لماذا هذه المبادرة؟",
    "why.lead": "كثيرًا ما يُطلب من الطلاب أن يتبنّوا رأيًا قبل أن يتعلّموا كيف يختبرون رأيًا. وهذه الورشة تعكس هذا الترتيب.",
    "why.1.t": "المشكلات العالمية نادرًا ما تحتمل إجابات بسيطة",
    "why.1.p": "أسئلة الاقتصاد والسياسات العامة تنطوي على موازنات بين مصالح حقيقية. والتعامل معها كمسائل محسومة يعلّم الطلاب درسًا خاطئًا عن طبيعة المعرفة.",
    "why.2.t": "فهم الحجّة المقابلة مهارة تُكتسب",
    "why.2.p": "ينبغي أن يكون الطالب قادرًا على عرض موقف يخالفه بدقّة تجعل أصحابه أنفسهم يقرّون بأنه عرضٌ أمين. وهذه القدرة تحتاج إلى تدريب مقصود.",
    "why.3.t": "المناظرة الأكاديمية يجب أن تقوم على الأدلّة",
    "why.3.p": "البلاغة بلا دليل تُنتج طلابًا واثقين ونتائج هشّة. وكل ادّعاء في هذه الورشة يجب أن يكون قابلًا للتتبّع إلى ما يمكن التحقّق منه.",
    "why.4.t": "الطلاب الدوليون يحملون زوايا نظر مختلفة",
    "why.4.p": "يأتي المشاركون من دول ونظم تعليمية مختلفة. وما تعدّه مجموعة بديهيًا هو غالبًا أول ما تسائله مجموعة أخرى.",
    "why.5.t": "الكتابة تحوّل النقاش إلى استدلال",
    "why.5.p": "قد تكافئ المناظرة سرعة البديهة، أما المقالة فلا. الكتابة تُلزم الطالب بإظهار بنية حجّته، وتوثيق مصادره، ومواجهة أضعف نقطة في موقفه.",
    "model.title": "النموذج الأكاديمي",
    "model.lead": "سؤال واحد يمرّ بثماني مراحل في يوم واحد، من البحث المستقل إلى مسوّدتين مكتملتين.",
    "model.1": "٢٥ طالبًا",
    "model.2": "سؤال مركزي واحد",
    "model.3": "فريقان متقابلان",
    "model.4": "بحث مستقل",
    "model.5": "إشراف أكاديمي",
    "model.6": "مناظرة منظّمة",
    "model.7": "كتابة جماعية",
    "model.8": "مقالتان نهائيتان",
    "two.title": "مبدأ الطرفين",
    "two.lead": "لا يُكلَّف أي فريق بأن «ينتصر». تُوزَّع المواقف ولا تُختار، ويقاس النجاح بجودة الاستدلال لا بحكم الجمهور.",
    "two.p": "في ختام اليوم، ينبغي أن تكون كل مجموعة قادرة على الإجابة عن خمسة أسئلة تخصّ موقفها والموقف الذي عارضته:",
    "two.1": "لماذا تبدو الحجّة مقنعة",
    "two.2": "أين تكمن نقاط ضعفها",
    "two.3": "ما الأدلّة التي تسندها",
    "two.4": "ما الأدلّة التي تعارضها",
    "two.5": "على أي افتراضات تقوم",
    "two.close": "والمجموعة التي تُحسن الدفاع عن جانبها لكنها تعجز عن وصف الجانب الآخر بإنصاف لم تُكمل التمرين.",
    "am.title": "المشرفون الأكاديميون",
    "am.lead": "تقترح المبادرة إشراك أربعة أساتذة أو باحثين أكاديميين على الأقل، يعملون مع المجموعتين معًا لا مع طرف دون آخر. ولم تُوجَّه الدعوات بعد، وكل مشاركة مرهونة بالتوافر وبالموافقات المؤسسية.",
    "am.1.t": "مساءلة الافتراضات",
    "am.1.p": "سؤال الطلاب عمّا تتطلّبه حجّتهم لتكون صحيحة، وعمّا تسلّم به ضمنًا دون بيان.",
    "am.2.t": "توجيه البحث",
    "am.2.p": "إرشاد الطلاب إلى الأدبيات ذات الصلة ومساعدتهم على تقييم جودة ما يجدونه.",
    "am.3.t": "رفع جودة الحجّة",
    "am.3.p": "إحكام بنية الموقف وحذف الاستدلالات التي لا تصمد أمام الفحص.",
    "am.4.t": "الإلزام بالدليل",
    "am.4.p": "ربط كل ادّعاء بمصدر موثّق، والتمييز بين الارتباط والتفسير السببي.",
    "am.5.t": "مراجعة المسوّدات",
    "am.5.p": "قراءة المقالتين أثناء تطوّرهما والتعليق على الوضوح والمنهج والتوثيق.",
    "am.6.t": "تقديم تغذية راجعة أكاديمية",
    "am.6.p": "منح الطلاب تصوّرًا واقعيًا عن المستوى المتوقَّع في العمل الجامعي.",
    "exp.title": "المخرجات المتوقَّعة",
    "exp.lead": "ما ينبغي أن يصبح المشاركون أقدر عليه بعد الورشة ممّا كانوا عليه قبلها.",
    "exp.1.t": "مهارات البحث",
    "exp.1.p": "الوصول إلى المصادر الأوّلية والبيانات وتوثيقها بشكل صحيح.",
    "exp.2.t": "التفكير النقدي",
    "exp.2.p": "اختبار بنية الحجّة بدل الاكتفاء بردّ الفعل على نتيجتها.",
    "exp.3.t": "تحليل السياسات العامة",
    "exp.3.p": "قراءة سؤال السياسة من زاوية الموازنات والتكاليف والقيود.",
    "exp.4.t": "الكتابة الأكاديمية",
    "exp.4.p": "إنتاج نصّ منظّم وموثّق يقوم على أطروحة قابلة للدفاع.",
    "exp.5.t": "التواصل بين الثقافات",
    "exp.5.p": "العمل المثمر مع زملاء يصوغون المشكلة نفسها بطريقة مختلفة.",
    "exp.6.t": "التواضع المعرفي",
    "exp.6.p": "إدراك حدود الأدلّة المتاحة، والتصريح بها كتابةً.",
    "abeth.title": "التعاون المقترح مع معهد ETH زيورخ",
    "abeth.statement": "هذا مقترح، وليس شراكة قائمة مع معهد ETH زيورخ.",
    "abeth.p1": "يسعدنا بحث إمكانية دعم المعهد لهذه المبادرة. وفيما يلي المجالات التي نأمل مناقشتها، وكلٌّ منها يتوقّف كليًّا على تقدير الجامعة وإجراءاتها.",
    "abeth.a1": "رعاية أكاديمية",
    "abeth.a2": "مكان الانعقاد",
    "abeth.a3": "إشراف أكاديمي",
    "abeth.a4": "إرشاد بشأن النشر",
    "abeth.a5": "شهادات مشاركة",
    "abeth.note": "جميع هذه العناصر مرهونة بموافقة معهد ETH زيورخ وبالسياسات المعمول بها لديه.",
    "abeth.cta": "ناقش المبادرة معنا",

    /* contact */
    "meta.title.contact": "تواصل | ورشة أكاديمية دولية ٢٠٢٨",
    "meta.desc.contact": "تواصل مع منظّم ورشة أكاديمية دولية مقترحة لسبتمبر ٢٠٢٨. نرحّب باستفسارات الأساتذة والجامعات والمتعاونين المحتملين.",
    "ct.kicker": "مبادرة أكاديمية مقترحة — سبتمبر ٢٠٢٨",
    "ct.title": "لنتحدّث عن المبادرة",
    "ct.lead": "إذا كنت أستاذًا جامعيًا أو مؤسسة أكاديمية أو ممثّلًا لجامعة أو متعاونًا محتملًا ويهمّك التعرّف أكثر على المبادرة، فيسعدنا أن نسمع منك.",
    "ct.form.title": "أرسل رسالة",
    "ct.form.intro": "هذا النموذج جزء من نسخة أوّلية تعمل في المتصفّح فقط: فهو يتحقّق من بياناتك محليًّا لكنه لا يرسلها إلى أي جهة. وربطه بخادم أو بخدمة بريد هو ما سيجعله فعّالًا. وإلى حين ذلك، يُرجى استخدام البريد الإلكتروني المجاور.",
    "ct.f.name": "الاسم",
    "ct.f.email": "البريد الإلكتروني",
    "ct.f.inst": "المؤسسة / الجهة",
    "ct.f.subject": "الموضوع",
    "ct.f.choose": "اختر موضوعًا",
    "ct.f.msg": "الرسالة",
    "ct.f.submit": "تحقّق من الرسالة وراجعها",
    "ct.direct.title": "تفضّل البريد الإلكتروني؟ تواصل معنا مباشرة.",
    "ct.d.name": "المنظّم",
    "ct.d.email": "البريد الإلكتروني",
    "ct.d.date": "الموعد المقترح",
    "ct.d.date.v": "سبتمبر ٢٠٢٨",
    "ct.d.loc": "المكان المقترح",
    "ct.d.loc.v": "معهد ETH زيورخ، رهنًا بالموافقة",
    "ct.d.cta": "اكتب رسالة بريد إلكتروني",
    "ct.d.note": "لم يوافق معهد ETH زيورخ على هذه المبادرة ولم يتبنّها ولم يلتزم باستضافتها. وهو مذكور بوصفه متعاونًا مقترحًا.",
    "cat.title": "ما الذي تودّ مناقشته؟",
    "cat.lead": "هذه هي المجالات التي يكون التعاون فيها أكثر قيمة في هذه المرحلة من المقترح.",
    "cat.1.t": "الإشراف الأكاديمي",
    "cat.1.p": "للأساتذة والباحثين المستعدّين لتوجيه الطلاب في البحث والمناظرة والكتابة خلال الورشة.",
    "cat.2.t": "التعاون المؤسسي",
    "cat.2.p": "للجامعات والهيئات الأكاديمية المهتمّة باستضافة المبادرة أو دعمها أو تقديم المشورة بشأنها.",
    "cat.3.t": "مشاركة الطلاب",
    "cat.3.p": "للمدارس والبرامج التي قد يرغب طلابها في الانضمام إلى دفعة عام ٢٠٢٨.",
    "cat.4.t": "النشر",
    "cat.4.p": "للمحرّرين والمنصّات الأكاديمية المستعدّين لتقديم المشورة بشأن مراجعة المقالتين النهائيتين أو نشرهما.",
    "cat.5.t": "استفسار عام",
    "cat.5.p": "لأي سؤال آخر عن المبادرة أو جدولها الزمني أو طريقة تطويرها."
  };

  /* Runtime strings used by JavaScript only. */
  var STRINGS = {
    en: {
      toAr: "العربية",
      toEn: "English",
      toArLabel: "Switch language to Arabic",
      toEnLabel: "Switch language to English",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      errName: "Please enter your name.",
      errEmail: "Please enter your email address.",
      errEmailFormat: "Please enter a valid email address, for example name@university.edu.",
      errSubject: "Please choose a subject.",
      errMessage: "Please write a short message (at least 20 characters).",
      statusOk: "Your details are valid, but this form has no backend and cannot send them. Please copy your message into an email to dr.ayman.alkinani@gmail.com — or use the “Write an email” button, which opens your mail app.",
      statusErr: "Some fields still need attention. Please review the messages above."
    },
    ar: {
      toAr: "العربية",
      toEn: "English",
      toArLabel: "تغيير اللغة إلى العربية",
      toEnLabel: "تغيير اللغة إلى الإنجليزية",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      errName: "يُرجى إدخال الاسم.",
      errEmail: "يُرجى إدخال البريد الإلكتروني.",
      errEmailFormat: "يُرجى إدخال بريد إلكتروني صحيح، مثل name@university.edu.",
      errSubject: "يُرجى اختيار الموضوع.",
      errMessage: "يُرجى كتابة رسالة قصيرة (٢٠ حرفًا على الأقل).",
      statusOk: "بياناتك صحيحة، لكن هذا النموذج لا يملك خادمًا ولا يمكنه إرسالها. يُرجى نسخ رسالتك وإرسالها إلى dr.ayman.alkinani@gmail.com، أو استخدام زر «اكتب رسالة بريد إلكتروني» الذي يفتح تطبيق البريد لديك.",
      statusErr: "ما زالت بعض الحقول بحاجة إلى مراجعة. يُرجى الاطّلاع على الرسائل أعلاه."
    }
  };

  /* ---------------------------------------------------------
     2. Language handling
     --------------------------------------------------------- */
  var i18nNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var EN = {};
  var currentLang = "en";

  i18nNodes.forEach(function (node) {
    var key = node.getAttribute("data-i18n");
    var attr = node.getAttribute("data-i18n-attr");
    if (EN[key] === undefined) {
      EN[key] = attr ? node.getAttribute(attr) : node.textContent;
    }
  });

  function store(lang) {
    try { window.localStorage.setItem("pc-lang", lang); } catch (e) { /* storage unavailable */ }
  }
  function restore() {
    try { return window.localStorage.getItem("pc-lang"); } catch (e) { return null; }
  }

  function applyLanguage(lang) {
    var dict = lang === "ar" ? AR : EN;
    currentLang = lang;

    i18nNodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var value = dict[key];
      if (value === undefined) value = EN[key];
      if (value === undefined) return;
      var attr = node.getAttribute("data-i18n-attr");
      if (attr) node.setAttribute(attr, value);
      else node.textContent = value;
    });

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    var s = STRINGS[lang];
    if (langToggle) {
      langToggle.textContent = lang === "ar" ? s.toEn : s.toAr;
      langToggle.setAttribute("lang", lang === "ar" ? "en" : "ar");
      langToggle.setAttribute("aria-label", lang === "ar" ? s.toEnLabel : s.toArLabel);
    }
    store(lang);
  }

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLanguage(currentLang === "ar" ? "en" : "ar");
    });
  }

  var saved = restore();
  if (saved === "ar") applyLanguage("ar");

  /* ---------------------------------------------------------
     3. Mobile navigation
     --------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  function setMenu(open) {
    if (!navToggle || !primaryNav) return;
    navToggle.setAttribute("aria-expanded", String(open));
    primaryNav.classList.toggle("is-open", open);
    var label = navToggle.querySelector(".visually-hidden");
    if (label) label.textContent = open ? STRINGS[currentLang].closeMenu : STRINGS[currentLang].openMenu;
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });

    primaryNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        navToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (navToggle.getAttribute("aria-expanded") !== "true") return;
      if (!event.target.closest("#primaryNav") && !event.target.closest("#navToggle")) setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 960) setMenu(false);
    });
  }

  /* ---------------------------------------------------------
     4. Active navigation state
     --------------------------------------------------------- */
  (function markActive() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    var hash = window.location.hash;
    var links = document.querySelectorAll(".primary-nav a");

    Array.prototype.forEach.call(links, function (link) {
      var href = link.getAttribute("href");
      var file = href.split("#")[0] || "index.html";
      var frag = href.indexOf("#") > -1 ? "#" + href.split("#")[1] : "";
      var samePage = file === path;

      if (samePage && frag && hash === frag) link.setAttribute("aria-current", "page");
      else if (samePage && !frag && (!hash || path !== "about.html")) link.setAttribute("aria-current", "page");
    });

    // Keep only the most specific match.
    var current = document.querySelectorAll('.primary-nav a[aria-current="page"]');
    if (current.length > 1) {
      Array.prototype.forEach.call(current, function (link, index) {
        if (index < current.length - 1) link.removeAttribute("aria-current");
      });
    }
  })();

  /* ---------------------------------------------------------
     5. Smooth scrolling for in-page links
     --------------------------------------------------------- */
  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute("href");
    if (id === "#" || id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    var header = document.getElementById("siteHeader");
    var offset = header ? header.offsetHeight + 8 : 0;
    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    if (history.replaceState) history.replaceState(null, "", id);
  });

  /* ---------------------------------------------------------
     6. Scroll reveal
     --------------------------------------------------------- */
  (function reveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    Array.prototype.forEach.call(items, function (el) { observer.observe(el); });
  })();

  /* ---------------------------------------------------------
     7. Contact form — validation only, no submission
     --------------------------------------------------------- */
  (function contactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var status = document.getElementById("formStatus");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setError(field, message) {
      var wrap = field.closest(".field");
      var box = document.getElementById("err-" + field.id);
      var invalid = Boolean(message);
      if (wrap) wrap.classList.toggle("has-error", invalid);
      field.setAttribute("aria-invalid", String(invalid));
      if (box) box.textContent = message || "";
      return !invalid;
    }

    function validateField(field) {
      var s = STRINGS[currentLang];
      var value = field.value.trim();

      switch (field.id) {
        case "name":
          return setError(field, value.length < 2 ? s.errName : "");
        case "email":
          if (!value) return setError(field, s.errEmail);
          return setError(field, emailPattern.test(value) ? "" : s.errEmailFormat);
        case "subject":
          return setError(field, value ? "" : s.errSubject);
        case "message":
          return setError(field, value.length < 20 ? s.errMessage : "");
        default:
          return setError(field, "");
      }
    }

    var fields = ["name", "email", "subject", "message"].map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);

    fields.forEach(function (field) {
      field.addEventListener("blur", function () { validateField(field); });
      field.addEventListener("input", function () {
        if (field.closest(".field").classList.contains("has-error")) validateField(field);
      });
      field.addEventListener("change", function () {
        if (field.tagName === "SELECT") validateField(field);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // the form is a prototype and never sends data

      var valid = true;
      var firstInvalid = null;

      fields.forEach(function (field) {
        var ok = validateField(field);
        if (!ok) {
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      var s = STRINGS[currentLang];
      status.hidden = false;
      status.setAttribute("data-state", valid ? "info" : "error");
      status.textContent = valid ? s.statusOk : s.statusErr;

      if (!valid && firstInvalid) firstInvalid.focus();
    });
  })();

  /* ---------------------------------------------------------
     8. Footer year
     --------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

})();
