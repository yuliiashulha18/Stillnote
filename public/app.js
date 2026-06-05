const storageKeys = {
  entries: "stillnote.entries",
  saved: "stillnote.savedAffirmations",
  profile: "stillnote.profile",
  plan: "stillnote.plan",
  trialStart: "stillnote.trialStart",
  support: "stillnote.supportMoments",
  chat: "stillnote.chatMessages",
  notificationPrefs: "stillnote.notificationPrefs",
  notificationLog: "stillnote.notificationLog",
  notificationLastSent: "stillnote.notificationLastSent",
  theme: "stillnote.theme",
  payment: "stillnote.paymentMethod",
  language: "stillnote.language",
  account: "stillnote.account",
  badges: "stillnote.badges",
  meditations: "stillnote.meditations",
  audioSessions: "stillnote.audioSessions"
};

const languages = {
  en: "English",
  es: "Spanish",
  zh: "Chinese",
  hi: "Hindi",
  ar: "Arabic",
  fr: "French",
  de: "German",
  pt: "Portuguese",
  ru: "Russian",
  ja: "Japanese",
  ko: "Korean",
  it: "Italian",
  tr: "Turkish",
  vi: "Vietnamese",
  id: "Indonesian",
  th: "Thai",
  pl: "Polish",
  uk: "Ukrainian",
  nl: "Dutch",
  sv: "Swedish",
  he: "Hebrew",
  el: "Greek",
  ro: "Romanian",
  bn: "Bengali",
  ur: "Urdu"
};

const uiTranslations = {
  es: {
    Today: "Hoy", Journal: "Diario", Chat: "Chat", Support: "Apoyo", Quiz: "Cuestionario", Membership: "Membresía", Settings: "Configuración",
    "Daily affirmations": "Afirmaciones diarias", "Account settings": "Configuración de la cuenta", Theme: "Tema", Light: "Claro", Dark: "Oscuro",
    Language: "Idioma", "App language": "Idioma de la app", Notifications: "Notificaciones", "Payment method": "Método de pago", "Mobile app": "App móvil",
    "Start with 7 days free": "Empieza con 7 días gratis", "Your daily affirmation": "Tu afirmación diaria", "Save affirmation": "Guardar afirmación",
    "Write thoughts": "Escribir pensamientos", "Talk with AI": "Hablar con IA", "Need support": "Necesito apoyo", "Feeling check-in": "Registro emocional",
    "One thought": "Un pensamiento", "Save check-in": "Guardar registro", "Save settings": "Guardar ajustes", "Update payment method": "Actualizar pago",
    "Remove payment method": "Eliminar método de pago", "Change plan": "Cambiar plan", "Recent reminders": "Recordatorios recientes", Download: "Descargar",
    "Download on the": "Descargar en", "Get it on": "Consíguelo en", "Saved locally": "Guardado localmente", Blocked: "Bloqueado", Trial: "Prueba",
    "No card saved": "No hay tarjeta guardada", "No plan selected": "Ningún plan seleccionado", "is selected as the app language.": "está seleccionado como idioma de la app."
  },
  zh: {
    Today: "今天", Journal: "日记", Chat: "聊天", Support: "支持", Quiz: "测验", Membership: "会员", Settings: "设置",
    "Daily affirmations": "每日肯定语", "Account settings": "账户设置", Theme: "主题", Light: "浅色", Dark: "深色",
    Language: "语言", "App language": "应用语言", Notifications: "通知", "Payment method": "付款方式", "Mobile app": "移动应用",
    "Start with 7 days free": "从 7 天免费开始", "Your daily affirmation": "你的每日肯定语", "Save affirmation": "保存肯定语",
    "Write thoughts": "写下想法", "Talk with AI": "与 AI 交谈", "Need support": "需要支持", "Feeling check-in": "情绪签到",
    "One thought": "一个想法", "Save check-in": "保存签到", "Save settings": "保存设置", "Update payment method": "更新付款方式",
    "Remove payment method": "移除付款方式", "Change plan": "更改计划", "Recent reminders": "最近提醒", Download: "下载",
    "Download on the": "在此下载", "Get it on": "获取于", "Saved locally": "已本地保存", Blocked: "已阻止", Trial: "试用",
    "No card saved": "未保存银行卡", "No plan selected": "未选择计划", "is selected as the app language.": "已选为应用语言。"
  },
  hi: {
    Today: "आज", Journal: "जर्नल", Chat: "चैट", Support: "सहायता", Quiz: "क्विज़", Membership: "सदस्यता", Settings: "सेटिंग्स",
    "Daily affirmations": "दैनिक सकारात्मक वाक्य", "Account settings": "खाता सेटिंग्स", Theme: "थीम", Light: "लाइट", Dark: "डार्क",
    Language: "भाषा", "App language": "ऐप भाषा", Notifications: "सूचनाएं", "Payment method": "भुगतान विधि", "Mobile app": "मोबाइल ऐप",
    "Start with 7 days free": "7 दिन मुफ्त से शुरू करें", "Your daily affirmation": "आपका दैनिक सकारात्मक वाक्य", "Save affirmation": "सहेजें",
    "Write thoughts": "विचार लिखें", "Talk with AI": "AI से बात करें", "Need support": "सहायता चाहिए", "Feeling check-in": "भावना जांच",
    "One thought": "एक विचार", "Save check-in": "चेक-इन सहेजें", "Save settings": "सेटिंग्स सहेजें", "Update payment method": "भुगतान अपडेट करें",
    "Remove payment method": "भुगतान हटाएं", "Change plan": "प्लान बदलें", "Recent reminders": "हाल के रिमाइंडर", Download: "डाउनलोड",
    "Download on the": "यहां डाउनलोड करें", "Get it on": "यहां पाएं", "Saved locally": "स्थानीय रूप से सहेजा", Blocked: "ब्लॉक", Trial: "ट्रायल",
    "No card saved": "कोई कार्ड सहेजा नहीं", "No plan selected": "कोई प्लान चयनित नहीं", "is selected as the app language.": "ऐप भाषा के रूप में चुनी गई है."
  },
  ar: {
    Today: "اليوم", Journal: "اليوميات", Chat: "الدردشة", Support: "الدعم", Quiz: "الاختبار", Membership: "العضوية", Settings: "الإعدادات",
    "Daily affirmations": "توكيدات يومية", "Account settings": "إعدادات الحساب", Theme: "المظهر", Light: "فاتح", Dark: "داكن",
    Language: "اللغة", "App language": "لغة التطبيق", Notifications: "الإشعارات", "Payment method": "طريقة الدفع", "Mobile app": "تطبيق الهاتف",
    "Start with 7 days free": "ابدأ بـ 7 أيام مجانًا", "Your daily affirmation": "توكيدك اليومي", "Save affirmation": "حفظ التوكيد",
    "Write thoughts": "اكتب الأفكار", "Talk with AI": "تحدث مع الذكاء الاصطناعي", "Need support": "أحتاج دعمًا", "Feeling check-in": "تسجيل المشاعر",
    "One thought": "فكرة واحدة", "Save check-in": "حفظ التسجيل", "Save settings": "حفظ الإعدادات", "Update payment method": "تحديث الدفع",
    "Remove payment method": "إزالة طريقة الدفع", "Change plan": "تغيير الخطة", "Recent reminders": "التذكيرات الأخيرة", Download: "تحميل",
    "Download on the": "حمّل من", "Get it on": "احصل عليه من", "Saved locally": "تم الحفظ محليًا", Blocked: "محظور", Trial: "تجربة",
    "No card saved": "لا توجد بطاقة محفوظة", "No plan selected": "لم يتم اختيار خطة", "is selected as the app language.": "محددة كلغة التطبيق."
  },
  fr: { Today: "Aujourd'hui", Journal: "Journal", Chat: "Chat", Support: "Soutien", Quiz: "Quiz", Membership: "Abonnement", Settings: "Réglages", "Daily affirmations": "Affirmations quotidiennes", "Account settings": "Réglages du compte", Theme: "Thème", Light: "Clair", Dark: "Sombre", Language: "Langue", "App language": "Langue de l'app", Notifications: "Notifications", "Payment method": "Mode de paiement", "Mobile app": "App mobile", "Start with 7 days free": "Commencez avec 7 jours gratuits", "Your daily affirmation": "Votre affirmation quotidienne", "Save affirmation": "Enregistrer l'affirmation", "Write thoughts": "Écrire ses pensées", "Talk with AI": "Parler à l'IA", "Need support": "Besoin de soutien", "Save settings": "Enregistrer", "Update payment method": "Mettre à jour le paiement", "Remove payment method": "Supprimer le paiement", "Change plan": "Changer d'offre", Download: "Télécharger", "Saved locally": "Enregistré localement", Blocked: "Bloqué", Trial: "Essai", "No card saved": "Aucune carte enregistrée", "No plan selected": "Aucune offre sélectionnée", "is selected as the app language.": "est sélectionné comme langue de l'app." },
  de: { Today: "Heute", Journal: "Tagebuch", Chat: "Chat", Support: "Unterstützung", Quiz: "Quiz", Membership: "Mitgliedschaft", Settings: "Einstellungen", "Daily affirmations": "Tägliche Affirmationen", "Account settings": "Kontoeinstellungen", Theme: "Design", Light: "Hell", Dark: "Dunkel", Language: "Sprache", "App language": "App-Sprache", Notifications: "Benachrichtigungen", "Payment method": "Zahlungsmethode", "Mobile app": "Mobile App", "Start with 7 days free": "Mit 7 Tagen kostenlos starten", "Your daily affirmation": "Deine tägliche Affirmation", "Save affirmation": "Affirmation speichern", "Write thoughts": "Gedanken schreiben", "Talk with AI": "Mit KI sprechen", "Need support": "Unterstützung brauchen", "Save settings": "Einstellungen speichern", "Update payment method": "Zahlung aktualisieren", "Remove payment method": "Zahlung entfernen", "Change plan": "Tarif ändern", Download: "Herunterladen", "Saved locally": "Lokal gespeichert", Blocked: "Blockiert", Trial: "Test", "No card saved": "Keine Karte gespeichert", "No plan selected": "Kein Tarif ausgewählt", "is selected as the app language.": "ist als App-Sprache ausgewählt." },
  pt: { Today: "Hoje", Journal: "Diário", Chat: "Chat", Support: "Suporte", Quiz: "Quiz", Membership: "Assinatura", Settings: "Configurações", "Daily affirmations": "Afirmações diárias", "Account settings": "Configurações da conta", Theme: "Tema", Light: "Claro", Dark: "Escuro", Language: "Idioma", "App language": "Idioma do app", Notifications: "Notificações", "Payment method": "Forma de pagamento", "Mobile app": "App móvel", "Start with 7 days free": "Comece com 7 dias grátis", "Your daily affirmation": "Sua afirmação diária", "Save affirmation": "Salvar afirmação", "Write thoughts": "Escrever pensamentos", "Talk with AI": "Falar com IA", "Need support": "Preciso de suporte", "Save settings": "Salvar configurações", "Update payment method": "Atualizar pagamento", "Remove payment method": "Remover pagamento", "Change plan": "Alterar plano", Download: "Baixar", "Saved locally": "Salvo localmente", Blocked: "Bloqueado", Trial: "Teste", "No card saved": "Nenhum cartão salvo", "No plan selected": "Nenhum plano selecionado", "is selected as the app language.": "está selecionado como idioma do app." },
  ru: { Today: "Сегодня", Journal: "Дневник", Chat: "Чат", Support: "Поддержка", Quiz: "Опрос", Membership: "Подписка", Settings: "Настройки", "Daily affirmations": "Ежедневные аффирмации", "Account settings": "Настройки аккаунта", Theme: "Тема", Light: "Светлая", Dark: "Темная", Language: "Язык", "App language": "Язык приложения", Notifications: "Уведомления", "Payment method": "Способ оплаты", "Mobile app": "Мобильное приложение", "Start with 7 days free": "Начните с 7 дней бесплатно", "Your daily affirmation": "Ваша ежедневная аффирмация", "Save affirmation": "Сохранить аффирмацию", "Write thoughts": "Записать мысли", "Talk with AI": "Поговорить с ИИ", "Need support": "Нужна поддержка", "Save settings": "Сохранить настройки", "Update payment method": "Обновить оплату", "Remove payment method": "Удалить оплату", "Change plan": "Изменить план", Download: "Скачать", "Saved locally": "Сохранено локально", Blocked: "Заблокировано", Trial: "Пробный период", "No card saved": "Карта не сохранена", "No plan selected": "План не выбран", "is selected as the app language.": "выбран как язык приложения." },
  ja: { Today: "今日", Journal: "ジャーナル", Chat: "チャット", Support: "サポート", Quiz: "クイズ", Membership: "メンバーシップ", Settings: "設定", "Daily affirmations": "毎日のアファメーション", "Account settings": "アカウント設定", Theme: "テーマ", Light: "ライト", Dark: "ダーク", Language: "言語", "App language": "アプリの言語", Notifications: "通知", "Payment method": "支払い方法", "Mobile app": "モバイルアプリ", "Start with 7 days free": "7日間無料で開始", "Your daily affirmation": "今日のアファメーション", "Save affirmation": "保存", "Write thoughts": "思考を書く", "Talk with AI": "AIと話す", "Need support": "サポートが必要", "Save settings": "設定を保存", "Update payment method": "支払いを更新", "Remove payment method": "支払いを削除", "Change plan": "プラン変更", Download: "ダウンロード", "Saved locally": "ローカルに保存済み", Blocked: "ブロック済み", Trial: "トライアル", "No card saved": "カード未保存", "No plan selected": "プラン未選択", "is selected as the app language.": "がアプリ言語として選択されています。" },
  ko: { Today: "오늘", Journal: "저널", Chat: "채팅", Support: "지원", Quiz: "퀴즈", Membership: "멤버십", Settings: "설정", "Daily affirmations": "매일 확언", "Account settings": "계정 설정", Theme: "테마", Light: "라이트", Dark: "다크", Language: "언어", "App language": "앱 언어", Notifications: "알림", "Payment method": "결제 수단", "Mobile app": "모바일 앱", "Start with 7 days free": "7일 무료로 시작", "Your daily affirmation": "오늘의 확언", "Save affirmation": "확언 저장", "Write thoughts": "생각 쓰기", "Talk with AI": "AI와 대화", "Need support": "지원 필요", "Save settings": "설정 저장", "Update payment method": "결제 업데이트", "Remove payment method": "결제 제거", "Change plan": "플랜 변경", Download: "다운로드", "Saved locally": "로컬에 저장됨", Blocked: "차단됨", Trial: "체험", "No card saved": "저장된 카드 없음", "No plan selected": "선택된 플랜 없음", "is selected as the app language.": "앱 언어로 선택되었습니다." },
  it: { Today: "Oggi", Journal: "Diario", Chat: "Chat", Support: "Supporto", Quiz: "Quiz", Membership: "Abbonamento", Settings: "Impostazioni", "Daily affirmations": "Affermazioni quotidiane", "Account settings": "Impostazioni account", Theme: "Tema", Light: "Chiaro", Dark: "Scuro", Language: "Lingua", "App language": "Lingua app", Notifications: "Notifiche", "Payment method": "Metodo di pagamento", "Mobile app": "App mobile", "Start with 7 days free": "Inizia con 7 giorni gratis", "Your daily affirmation": "La tua affermazione quotidiana", "Save affirmation": "Salva affermazione", "Write thoughts": "Scrivi pensieri", "Talk with AI": "Parla con IA", "Need support": "Serve supporto", "Save settings": "Salva impostazioni", "Update payment method": "Aggiorna pagamento", "Remove payment method": "Rimuovi pagamento", "Change plan": "Cambia piano", Download: "Scarica", "Saved locally": "Salvato localmente", Blocked: "Bloccato", Trial: "Prova", "No card saved": "Nessuna carta salvata", "No plan selected": "Nessun piano selezionato", "is selected as the app language.": "è selezionato come lingua dell'app." },
  tr: { Today: "Bugün", Journal: "Günlük", Chat: "Sohbet", Support: "Destek", Quiz: "Test", Membership: "Üyelik", Settings: "Ayarlar", "Daily affirmations": "Günlük olumlamalar", "Account settings": "Hesap ayarları", Theme: "Tema", Light: "Açık", Dark: "Koyu", Language: "Dil", "App language": "Uygulama dili", Notifications: "Bildirimler", "Payment method": "Ödeme yöntemi", "Mobile app": "Mobil uygulama", "Start with 7 days free": "7 gün ücretsiz başla", "Your daily affirmation": "Günlük olumlaman", "Save affirmation": "Olumlamayı kaydet", "Write thoughts": "Düşüncelerini yaz", "Talk with AI": "AI ile konuş", "Need support": "Destek gerek", "Save settings": "Ayarları kaydet", "Update payment method": "Ödemeyi güncelle", "Remove payment method": "Ödemeyi kaldır", "Change plan": "Planı değiştir", Download: "İndir", "Saved locally": "Yerel olarak kaydedildi", Blocked: "Engellendi", Trial: "Deneme", "No card saved": "Kart kaydedilmedi", "No plan selected": "Plan seçilmedi", "is selected as the app language.": "uygulama dili olarak seçildi." },
  vi: { Today: "Hôm nay", Journal: "Nhật ký", Chat: "Trò chuyện", Support: "Hỗ trợ", Quiz: "Câu hỏi", Membership: "Thành viên", Settings: "Cài đặt", Theme: "Giao diện", Light: "Sáng", Dark: "Tối", Language: "Ngôn ngữ", Notifications: "Thông báo", "Payment method": "Phương thức thanh toán", "Mobile app": "Ứng dụng di động", Download: "Tải xuống", "Saved locally": "Đã lưu cục bộ", Blocked: "Bị chặn", Trial: "Dùng thử", "No card saved": "Chưa lưu thẻ", "No plan selected": "Chưa chọn gói", "is selected as the app language.": "được chọn làm ngôn ngữ ứng dụng." },
  id: { Today: "Hari ini", Journal: "Jurnal", Chat: "Obrolan", Support: "Dukungan", Quiz: "Kuis", Membership: "Keanggotaan", Settings: "Pengaturan", Theme: "Tema", Light: "Terang", Dark: "Gelap", Language: "Bahasa", Notifications: "Notifikasi", "Payment method": "Metode pembayaran", "Mobile app": "Aplikasi seluler", Download: "Unduh", "Saved locally": "Disimpan lokal", Blocked: "Diblokir", Trial: "Uji coba", "No card saved": "Tidak ada kartu tersimpan", "No plan selected": "Belum memilih paket", "is selected as the app language.": "dipilih sebagai bahasa aplikasi." },
  th: { Today: "วันนี้", Journal: "บันทึก", Chat: "แชท", Support: "การสนับสนุน", Quiz: "แบบทดสอบ", Membership: "สมาชิก", Settings: "ตั้งค่า", Theme: "ธีม", Light: "สว่าง", Dark: "มืด", Language: "ภาษา", Notifications: "การแจ้งเตือน", "Payment method": "วิธีชำระเงิน", "Mobile app": "แอปมือถือ", Download: "ดาวน์โหลด", "Saved locally": "บันทึกในเครื่องแล้ว", Blocked: "ถูกบล็อก", Trial: "ทดลอง", "No card saved": "ยังไม่มีบัตร", "No plan selected": "ยังไม่เลือกแผน", "is selected as the app language.": "ถูกเลือกเป็นภาษาของแอป" },
  pl: { Today: "Dzisiaj", Journal: "Dziennik", Chat: "Czat", Support: "Wsparcie", Quiz: "Quiz", Membership: "Członkostwo", Settings: "Ustawienia", Theme: "Motyw", Light: "Jasny", Dark: "Ciemny", Language: "Język", Notifications: "Powiadomienia", "Payment method": "Metoda płatności", "Mobile app": "Aplikacja mobilna", Download: "Pobierz", "Saved locally": "Zapisano lokalnie", Blocked: "Zablokowane", Trial: "Okres próbny", "No card saved": "Brak zapisanej karty", "No plan selected": "Nie wybrano planu", "is selected as the app language.": "jest wybrany jako język aplikacji." },
  uk: { Today: "Сьогодні", Journal: "Щоденник", Chat: "Чат", Support: "Підтримка", Quiz: "Опитування", Membership: "Підписка", Settings: "Налаштування", "Daily affirmations": "Щоденні афірмації", "Account settings": "Налаштування акаунта", Theme: "Тема", Light: "Світла", Dark: "Темна", Language: "Мова", "App language": "Мова застосунку", Notifications: "Сповіщення", "Payment method": "Спосіб оплати", "Mobile app": "Мобільний застосунок", "Start with 7 days free": "Почніть із 7 днів безкоштовно", "Your daily affirmation": "Ваша щоденна афірмація", "Save affirmation": "Зберегти афірмацію", "Write thoughts": "Записати думки", "Talk with AI": "Поговорити з AI", "Need support": "Потрібна підтримка", "Save settings": "Зберегти налаштування", "Update payment method": "Оновити оплату", "Remove payment method": "Видалити оплату", "Change plan": "Змінити план", Download: "Завантажити", "Saved locally": "Збережено локально", Blocked: "Заблоковано", Trial: "Пробний період", "No card saved": "Картку не збережено", "No plan selected": "План не вибрано", "is selected as the app language.": "вибрано мовою застосунку." },
  nl: { Today: "Vandaag", Journal: "Dagboek", Chat: "Chat", Support: "Steun", Quiz: "Quiz", Membership: "Lidmaatschap", Settings: "Instellingen", Theme: "Thema", Light: "Licht", Dark: "Donker", Language: "Taal", Notifications: "Meldingen", "Payment method": "Betaalmethode", "Mobile app": "Mobiele app", Download: "Download", "Saved locally": "Lokaal opgeslagen", Blocked: "Geblokkeerd", Trial: "Proef", "No card saved": "Geen kaart opgeslagen", "No plan selected": "Geen plan geselecteerd", "is selected as the app language.": "is geselecteerd als app-taal." },
  sv: { Today: "Idag", Journal: "Journal", Chat: "Chatt", Support: "Stöd", Quiz: "Quiz", Membership: "Medlemskap", Settings: "Inställningar", Theme: "Tema", Light: "Ljust", Dark: "Mörkt", Language: "Språk", Notifications: "Aviseringar", "Payment method": "Betalningsmetod", "Mobile app": "Mobilapp", Download: "Ladda ner", "Saved locally": "Sparat lokalt", Blocked: "Blockerad", Trial: "Provperiod", "No card saved": "Inget kort sparat", "No plan selected": "Ingen plan vald", "is selected as the app language.": "är valt som appspråk." },
  he: { Today: "היום", Journal: "יומן", Chat: "צ'אט", Support: "תמיכה", Quiz: "שאלון", Membership: "מנוי", Settings: "הגדרות", Theme: "ערכת נושא", Light: "בהיר", Dark: "כהה", Language: "שפה", Notifications: "התראות", "Payment method": "אמצעי תשלום", "Mobile app": "אפליקציה לנייד", Download: "הורדה", "Saved locally": "נשמר מקומית", Blocked: "חסום", Trial: "ניסיון", "No card saved": "לא נשמר כרטיס", "No plan selected": "לא נבחרה תוכנית", "is selected as the app language.": "נבחרה כשפת האפליקציה." },
  el: { Today: "Σήμερα", Journal: "Ημερολόγιο", Chat: "Συνομιλία", Support: "Υποστήριξη", Quiz: "Κουίζ", Membership: "Συνδρομή", Settings: "Ρυθμίσεις", Theme: "Θέμα", Light: "Φωτεινό", Dark: "Σκούρο", Language: "Γλώσσα", Notifications: "Ειδοποιήσεις", "Payment method": "Τρόπος πληρωμής", "Mobile app": "Εφαρμογή κινητού", Download: "Λήψη", "Saved locally": "Αποθηκεύτηκε τοπικά", Blocked: "Αποκλεισμένο", Trial: "Δοκιμή", "No card saved": "Δεν υπάρχει κάρτα", "No plan selected": "Δεν επιλέχθηκε πλάνο", "is selected as the app language.": "επιλέχθηκε ως γλώσσα εφαρμογής." },
  ro: { Today: "Astăzi", Journal: "Jurnal", Chat: "Chat", Support: "Sprijin", Quiz: "Quiz", Membership: "Abonament", Settings: "Setări", Theme: "Temă", Light: "Luminos", Dark: "Întunecat", Language: "Limbă", Notifications: "Notificări", "Payment method": "Metodă de plată", "Mobile app": "Aplicație mobilă", Download: "Descarcă", "Saved locally": "Salvat local", Blocked: "Blocat", Trial: "Probă", "No card saved": "Niciun card salvat", "No plan selected": "Niciun plan selectat", "is selected as the app language.": "este selectată ca limbă a aplicației." },
  bn: { Today: "আজ", Journal: "জার্নাল", Chat: "চ্যাট", Support: "সহায়তা", Quiz: "কুইজ", Membership: "সদস্যতা", Settings: "সেটিংস", Theme: "থিম", Light: "লাইট", Dark: "ডার্ক", Language: "ভাষা", Notifications: "নোটিফিকেশন", "Payment method": "পেমেন্ট পদ্ধতি", "Mobile app": "মোবাইল অ্যাপ", Download: "ডাউনলোড", "Saved locally": "লোকালি সংরক্ষিত", Blocked: "ব্লক করা", Trial: "ট্রায়াল", "No card saved": "কোনো কার্ড নেই", "No plan selected": "কোনো প্ল্যান নেই", "is selected as the app language.": "অ্যাপের ভাষা হিসেবে নির্বাচিত।" },
  ur: { Today: "آج", Journal: "جرنل", Chat: "چیٹ", Support: "مدد", Quiz: "کوئز", Membership: "رکنیت", Settings: "ترتیبات", Theme: "تھیم", Light: "روشن", Dark: "گہرا", Language: "زبان", Notifications: "اطلاعات", "Payment method": "ادائیگی کا طریقہ", "Mobile app": "موبائل ایپ", Download: "ڈاؤن لوڈ", "Saved locally": "مقامی طور پر محفوظ", Blocked: "بلاک", Trial: "آزمائش", "No card saved": "کوئی کارڈ محفوظ نہیں", "No plan selected": "کوئی پلان منتخب نہیں", "is selected as the app language.": "ایپ کی زبان کے طور پر منتخب ہے۔" }
};

const translationAdditions = {
  es: {
    "7 day trial": "Prueba de 7 días", "View plans": "Ver planes", "Personal affirmation practice": "Práctica personal de afirmaciones", "Sunlit notebook beside a cup and plant": "Cuaderno iluminado por el sol junto a una taza y una planta", "Begin with one steady sentence. Leave the rest of your thoughts somewhere kind.": "Empieza con una frase serena. Deja el resto de tus pensamientos en un lugar amable.", "Find my affirmation style": "Encontrar mi estilo de afirmación",
    "Stillnote will remember this language preference.": "Stillnote recordará esta preferencia de idioma.", "Language saved": "Idioma guardado", "Notifications saved": "Notificaciones guardadas", "Payment saved": "Pago guardado", "Payment removed": "Pago eliminado", "days left": "días restantes", "Trial ended": "Prueba terminada", "selected after trial": "seleccionado después de la prueba", ending: "termina en", "Next reminder around": "Próximo recordatorio alrededor de", reminder: "recordatorio", "It is time to": "Es momento de", and: "y", "read today's affirmation": "leer la afirmación de hoy", "write one honest thought": "escribir un pensamiento honesto", "take a small care pause": "hacer una pequeña pausa de cuidado", "take one steady moment for yourself": "tomar un momento sereno para ti",
    "Not enabled": "No activadas", Enabled: "Activadas", Unsupported: "No compatible", "In-app only": "Solo en la app", "Browser notifications enabled": "Notificaciones del navegador activadas", "Browser notifications enabled.": "Notificaciones del navegador activadas.", "Notifications were not enabled.": "Las notificaciones no se activaron.",
    "Daily reminder time": "Hora del recordatorio diario", "Remind me to": "Recordarme que", "Read my affirmation": "Leer mi afirmación", "Write a quick journal entry": "Escribir una entrada breve", "Take a care pause": "Hacer una pausa de cuidado", "Quiet mode: keep reminders inside the app only": "Modo silencioso: mantener recordatorios solo dentro de la app",
    "Stillnote reminder": "Recordatorio de Stillnote", "Stillnote test reminder": "Recordatorio de prueba de Stillnote", "It is time to read today's affirmation, write one honest thought and take a small care pause.": "Es momento de leer la afirmación de hoy, escribir un pensamiento honesto y hacer una pequeña pausa de cuidado.", "Browser notification when allowed": "Notificación del navegador cuando esté permitida", "Browser notifications work while Stillnote is open in this prototype. A production app can move this schedule to a backend or service worker.": "Las notificaciones del navegador funcionan mientras Stillnote está abierto en este prototipo. Una app de producción puede mover esta programación a un backend o service worker.", "Enable browser notifications": "Activar notificaciones del navegador", "Send test": "Enviar prueba", "No reminder scheduled": "No hay recordatorio programado", "Not scheduled": "No programado", "Reminder history will appear here.": "El historial de recordatorios aparecerá aquí.", "Reminder history cleared.": "Historial de recordatorios borrado.",
    "Name on card": "Nombre en la tarjeta", Name: "Nombre", "Card type": "Tipo de tarjeta", "Last 4 digits": "Últimos 4 dígitos", Expiry: "Vencimiento", "Add name, expiry, and 4 card digits.": "Agrega nombre, vencimiento y 4 dígitos de la tarjeta.", "Payment method updated.": "Método de pago actualizado.", "Payment method removed.": "Método de pago eliminado.",
    "Manage your weekly, monthly, 6 month, or annual membership plan.": "Gestiona tu plan semanal, mensual, de 6 meses o anual.", "Open the store for the iOS or Android mobile app.": "Abre la tienda para la app móvil iOS o Android.", "Download on the": "Descargar en", "Get it on": "Consíguelo en", "Download on the App Store": "Descargar en App Store", "Get it on Google Play": "Disponible en Google Play", "Recent reminders": "Recordatorios recientes", "Clear reminders": "Borrar recordatorios", Clear: "Claro",
    Refresh: "Actualizar", Restorative: "Restaurador", "Feeling check-in": "Registro emocional", Mood: "Estado de ánimo", Soft: "Suave", Heavy: "Pesado", Tender: "Tierno", "One thought": "Un pensamiento", "Save check-in": "Guardar registro", "Quick prompts": "Sugerencias rápidas", "What is present right now?": "¿Qué está presente ahora?", Permission: "Permiso", "Next step": "Siguiente paso", Gratitude: "Gratitud", "journal entries": "entradas del diario", "saved affirmations": "afirmaciones guardadas", "support moments": "momentos de apoyo", "reminders sent": "recordatorios enviados", "current access": "acceso actual", "Daily Audio": "Audio diario", "Daily audio": "Audio diario", "Guided affirmations": "Afirmaciones guiadas", "New session": "Nueva sesión", "Press start, settle in, and listen.": "Presiona iniciar, acomódate y escucha.", "Your daily affirmation will play with a soft voice, nature sound, and calm music.": "Tu afirmación diaria sonará con una voz suave, naturaleza y música tranquila.", Start: "Iniciar", Pause: "Pausar", Stop: "Detener", "Listening settings": "Ajustes de escucha", Voice: "Voz", "Nature background": "Fondo de naturaleza", "Forest rain": "Lluvia del bosque", "Ocean waves": "Olas del mar", "Night calm": "Calma nocturna", "Soft wind": "Viento suave", "Calm music": "Música tranquila", "Gentle tones behind the voice": "Tonos suaves detrás de la voz", "Session length": "Duración de la sesión", "About 3 minutes": "Unos 3 minutos", "Stopped. Press start when you want to listen again.": "Detenido. Presiona iniciar cuando quieras escuchar de nuevo.", "Rest is not something I earn. It is something I am allowed to receive.": "El descanso no es algo que gano. Es algo que puedo recibir."
  },
  fr: {
    "7 day trial": "Essai de 7 jours", "View plans": "Voir les offres", "Personal affirmation practice": "Pratique personnelle d'affirmations", "Sunlit notebook beside a cup and plant": "Carnet ensoleillé à côté d'une tasse et d'une plante", "Begin with one steady sentence. Leave the rest of your thoughts somewhere kind.": "Commencez par une phrase stable. Déposez le reste de vos pensées dans un endroit doux.", "Find my affirmation style": "Trouver mon style d'affirmation",
    "Stillnote will remember this language preference.": "Stillnote mémorisera cette préférence linguistique.", "Language saved": "Langue enregistrée", "Notifications saved": "Notifications enregistrées", "Payment saved": "Paiement enregistré", "Payment removed": "Paiement supprimé", "days left": "jours restants", "Trial ended": "Essai terminé", "selected after trial": "sélectionné après l'essai", ending: "se terminant par", "Next reminder around": "Prochain rappel vers", reminder: "rappel", "It is time to": "Il est temps de", and: "et", "read today's affirmation": "lire l'affirmation du jour", "write one honest thought": "écrire une pensée honnête", "take a small care pause": "prendre une petite pause de soin", "take one steady moment for yourself": "prendre un moment stable pour vous",
    "Not enabled": "Non activées", Enabled: "Activées", Unsupported: "Non pris en charge", "In-app only": "Dans l'app seulement", "Browser notifications enabled": "Notifications du navigateur activées", "Browser notifications enabled.": "Notifications du navigateur activées.", "Notifications were not enabled.": "Les notifications n'ont pas été activées.",
    "Daily reminder time": "Heure du rappel quotidien", "Remind me to": "Me rappeler de", "Read my affirmation": "Lire mon affirmation", "Write a quick journal entry": "Écrire une courte entrée", "Take a care pause": "Faire une pause de soin", "Quiet mode: keep reminders inside the app only": "Mode silencieux : garder les rappels dans l'app seulement",
    "Stillnote reminder": "Rappel Stillnote", "Stillnote test reminder": "Rappel test Stillnote", "It is time to read today's affirmation, write one honest thought and take a small care pause.": "Il est temps de lire l'affirmation du jour, d'écrire une pensée honnête et de prendre une petite pause de soin.", "Browser notification when allowed": "Notification du navigateur si autorisée", "Browser notifications work while Stillnote is open in this prototype. A production app can move this schedule to a backend or service worker.": "Les notifications du navigateur fonctionnent pendant que Stillnote est ouvert dans ce prototype. Une app de production peut déplacer ce planning vers un backend ou un service worker.", "Enable browser notifications": "Activer les notifications du navigateur", "Send test": "Envoyer un test", "No reminder scheduled": "Aucun rappel programmé", "Not scheduled": "Non programmé", "Reminder history will appear here.": "L'historique des rappels apparaîtra ici.", "Reminder history cleared.": "Historique des rappels effacé.",
    "Name on card": "Nom sur la carte", Name: "Nom", "Card type": "Type de carte", "Last 4 digits": "4 derniers chiffres", Expiry: "Expiration", "Add name, expiry, and 4 card digits.": "Ajoutez le nom, l'expiration et les 4 chiffres de la carte.", "Payment method updated.": "Mode de paiement mis à jour.", "Payment method removed.": "Mode de paiement supprimé.",
    "Manage your weekly, monthly, 6 month, or annual membership plan.": "Gérez votre abonnement hebdomadaire, mensuel, 6 mois ou annuel.", "Open the store for the iOS or Android mobile app.": "Ouvrez la boutique pour l'app mobile iOS ou Android.", "Download on the": "Télécharger sur", "Get it on": "Disponible sur", "Download on the App Store": "Télécharger sur l'App Store", "Get it on Google Play": "Disponible sur Google Play", "Recent reminders": "Rappels récents", "Clear reminders": "Effacer les rappels", Clear: "Clair",
    Refresh: "Actualiser", Restorative: "Restaurateur", "Feeling check-in": "Point émotionnel", Mood: "Humeur", Soft: "Doux", Heavy: "Lourd", Tender: "Tendre", "One thought": "Une pensée", "Save check-in": "Enregistrer le point", "Quick prompts": "Invites rapides", "What is present right now?": "Qu'est-ce qui est présent maintenant ?", Permission: "Permission", "Next step": "Prochaine étape", Gratitude: "Gratitude", "journal entries": "entrées du journal", "saved affirmations": "affirmations enregistrées", "support moments": "moments de soutien", "reminders sent": "rappels envoyés", "current access": "accès actuel", "Daily Audio": "Audio quotidien", "Daily audio": "Audio quotidien", "Guided affirmations": "Affirmations guidées", "New session": "Nouvelle séance", "Press start, settle in, and listen.": "Appuyez sur démarrer, installez-vous et écoutez.", "Your daily affirmation will play with a soft voice, nature sound, and calm music.": "Votre affirmation quotidienne sera lue avec une voix douce, des sons de nature et une musique calme.", Start: "Démarrer", Pause: "Pause", Stop: "Arrêter", "Listening settings": "Réglages d'écoute", Voice: "Voix", "Nature background": "Fond naturel", "Forest rain": "Pluie en forêt", "Ocean waves": "Vagues de l'océan", "Night calm": "Calme nocturne", "Soft wind": "Vent doux", "Calm music": "Musique calme", "Gentle tones behind the voice": "Tons doux derrière la voix", "Session length": "Durée de la séance", "About 3 minutes": "Environ 3 minutes", "Stopped. Press start when you want to listen again.": "Arrêté. Appuyez sur démarrer quand vous voulez réécouter.", "Rest is not something I earn. It is something I am allowed to receive.": "Le repos n'est pas quelque chose que je gagne. C'est quelque chose que j'ai le droit de recevoir."
  },
  de: {
    "7 day trial": "7 Tage Test", "View plans": "Tarife ansehen", "Personal affirmation practice": "Persönliche Affirmationspraxis", "Sunlit notebook beside a cup and plant": "Sonnenbeschienenes Notizbuch neben Tasse und Pflanze", "Begin with one steady sentence. Leave the rest of your thoughts somewhere kind.": "Beginne mit einem ruhigen Satz. Lege den Rest deiner Gedanken an einen freundlichen Ort.", "Find my affirmation style": "Meinen Affirmationsstil finden",
    "Stillnote will remember this language preference.": "Stillnote merkt sich diese Spracheinstellung.", "Language saved": "Sprache gespeichert", "Notifications saved": "Benachrichtigungen gespeichert", "Payment saved": "Zahlung gespeichert", "Payment removed": "Zahlung entfernt", "days left": "Tage übrig", "Trial ended": "Testphase beendet", "selected after trial": "nach der Testphase ausgewählt", ending: "endet auf", "Next reminder around": "Nächste Erinnerung ungefähr um", reminder: "Erinnerung", "It is time to": "Es ist Zeit,", and: "und", "read today's affirmation": "die heutige Affirmation zu lesen", "write one honest thought": "einen ehrlichen Gedanken aufzuschreiben", "take a small care pause": "eine kleine Pflegepause zu nehmen", "take one steady moment for yourself": "einen ruhigen Moment für dich zu nehmen",
    "Not enabled": "Nicht aktiviert", Enabled: "Aktiviert", Unsupported: "Nicht unterstützt", "In-app only": "Nur in der App", "Browser notifications enabled": "Browser-Benachrichtigungen aktiviert", "Browser notifications enabled.": "Browser-Benachrichtigungen aktiviert.", "Notifications were not enabled.": "Benachrichtigungen wurden nicht aktiviert.",
    "Daily reminder time": "Tägliche Erinnerungszeit", "Remind me to": "Erinnere mich daran", "Read my affirmation": "Meine Affirmation lesen", "Write a quick journal entry": "Kurzen Tagebucheintrag schreiben", "Take a care pause": "Eine Pflegepause nehmen", "Quiet mode: keep reminders inside the app only": "Ruhemodus: Erinnerungen nur in der App behalten",
    "Stillnote reminder": "Stillnote-Erinnerung", "Stillnote test reminder": "Stillnote-Testerinnerung", "It is time to read today's affirmation, write one honest thought and take a small care pause.": "Es ist Zeit, die heutige Affirmation zu lesen, einen ehrlichen Gedanken aufzuschreiben und eine kleine Pflegepause zu nehmen.", "Browser notification when allowed": "Browser-Benachrichtigung, wenn erlaubt", "Browser notifications work while Stillnote is open in this prototype. A production app can move this schedule to a backend or service worker.": "Browser-Benachrichtigungen funktionieren in diesem Prototyp, solange Stillnote geöffnet ist. Eine Produktions-App kann diese Planung in ein Backend oder einen Service Worker verschieben.", "Enable browser notifications": "Browser-Benachrichtigungen aktivieren", "Send test": "Test senden", "No reminder scheduled": "Keine Erinnerung geplant", "Not scheduled": "Nicht geplant", "Reminder history will appear here.": "Der Erinnerungsverlauf erscheint hier.", "Reminder history cleared.": "Erinnerungsverlauf gelöscht.",
    "Name on card": "Name auf der Karte", Name: "Name", "Card type": "Kartentyp", "Last 4 digits": "Letzte 4 Ziffern", Expiry: "Ablauf", "Add name, expiry, and 4 card digits.": "Name, Ablaufdatum und 4 Kartenziffern eingeben.", "Payment method updated.": "Zahlungsmethode aktualisiert.", "Payment method removed.": "Zahlungsmethode entfernt.",
    "Manage your weekly, monthly, 6 month, or annual membership plan.": "Verwalte deinen wöchentlichen, monatlichen, 6-Monats- oder Jahrestarif.", "Open the store for the iOS or Android mobile app.": "Öffne den Store für die iOS- oder Android-App.", "Download on the": "Laden im", "Get it on": "Erhalten bei", "Download on the App Store": "Im App Store laden", "Get it on Google Play": "Bei Google Play erhalten", "Recent reminders": "Aktuelle Erinnerungen", "Clear reminders": "Erinnerungen löschen", Clear: "Klar",
    Refresh: "Aktualisieren", Restorative: "Erholsam", "Feeling check-in": "Gefühls-Check-in", Mood: "Stimmung", Soft: "Sanft", Heavy: "Schwer", Tender: "Zart", "One thought": "Ein Gedanke", "Save check-in": "Check-in speichern", "Quick prompts": "Schnelle Impulse", "What is present right now?": "Was ist gerade da?", Permission: "Erlaubnis", "Next step": "Nächster Schritt", Gratitude: "Dankbarkeit", "journal entries": "Tagebucheinträge", "saved affirmations": "gespeicherte Affirmationen", "support moments": "Unterstützungsmomente", "reminders sent": "gesendete Erinnerungen", "current access": "aktueller Zugang", "Daily Audio": "Tägliches Audio", "Daily audio": "Tägliches Audio", "Guided affirmations": "Geführte Affirmationen", "New session": "Neue Sitzung", "Press start, settle in, and listen.": "Drücke Start, komm zur Ruhe und höre zu.", "Your daily affirmation will play with a soft voice, nature sound, and calm music.": "Deine tägliche Affirmation wird mit sanfter Stimme, Naturklang und ruhiger Musik abgespielt.", Start: "Start", Pause: "Pause", Stop: "Stopp", "Listening settings": "Höreinstellungen", Voice: "Stimme", "Nature background": "Naturhintergrund", "Forest rain": "Waldregen", "Ocean waves": "Meereswellen", "Night calm": "Nachtstille", "Soft wind": "Sanfter Wind", "Calm music": "Ruhige Musik", "Gentle tones behind the voice": "Sanfte Töne hinter der Stimme", "Session length": "Sitzungsdauer", "About 3 minutes": "Etwa 3 Minuten", "Stopped. Press start when you want to listen again.": "Gestoppt. Drücke Start, wenn du wieder hören möchtest.", "Rest is not something I earn. It is something I am allowed to receive.": "Ruhe ist nichts, was ich mir verdienen muss. Sie ist etwas, das ich empfangen darf."
  },
  uk: {
    "7 day trial": "7-денний пробний період", "View plans": "Переглянути плани", "Personal affirmation practice": "Особиста практика афірмацій", "Sunlit notebook beside a cup and plant": "Освітлений сонцем нотатник біля чашки та рослини", "Begin with one steady sentence. Leave the rest of your thoughts somewhere kind.": "Почніть з одного спокійного речення. Решту думок залиште в доброму місці.", "Find my affirmation style": "Знайти мій стиль афірмацій",
    "Stillnote will remember this language preference.": "Stillnote запам'ятає цей вибір мови.", "Language saved": "Мову збережено", "Notifications saved": "Сповіщення збережено", "Payment saved": "Оплату збережено", "Payment removed": "Оплату видалено", "days left": "днів залишилось", "Trial ended": "Пробний період завершено", "selected after trial": "вибрано після пробного періоду", ending: "закінчується на", "Next reminder around": "Наступне нагадування приблизно о", reminder: "нагадування", "It is time to": "Час", and: "і", "read today's affirmation": "прочитати сьогоднішню афірмацію", "write one honest thought": "записати одну чесну думку", "take a small care pause": "зробити маленьку паузу турботи", "take one steady moment for yourself": "зробити один спокійний момент для себе",
    "Not enabled": "Не ввімкнено", Enabled: "Увімкнено", Unsupported: "Не підтримується", "In-app only": "Лише в застосунку", "Browser notifications enabled": "Сповіщення браузера ввімкнено", "Browser notifications enabled.": "Сповіщення браузера ввімкнено.", "Notifications were not enabled.": "Сповіщення не було ввімкнено.",
    "Daily reminder time": "Час щоденного нагадування", "Remind me to": "Нагадати мені", "Read my affirmation": "Прочитати мою афірмацію", "Write a quick journal entry": "Написати короткий запис у щоденнику", "Take a care pause": "Зробити паузу турботи", "Quiet mode: keep reminders inside the app only": "Тихий режим: залишати нагадування лише в застосунку",
    "Stillnote reminder": "Нагадування Stillnote", "Stillnote test reminder": "Тестове нагадування Stillnote", "It is time to read today's affirmation, write one honest thought and take a small care pause.": "Час прочитати сьогоднішню афірмацію, записати одну чесну думку й зробити маленьку паузу турботи.", "Browser notification when allowed": "Сповіщення браузера, коли дозволено", "Browser notifications work while Stillnote is open in this prototype. A production app can move this schedule to a backend or service worker.": "Сповіщення браузера працюють, поки Stillnote відкритий у цьому прототипі. У готовому застосунку цей розклад можна перенести на бекенд або service worker.", "Enable browser notifications": "Увімкнути сповіщення браузера", "Send test": "Надіслати тест", "No reminder scheduled": "Нагадування не заплановано", "Not scheduled": "Не заплановано", "Reminder history will appear here.": "Історія нагадувань з'явиться тут.", "Reminder history cleared.": "Історію нагадувань очищено.",
    "Name on card": "Ім'я на картці", Name: "Ім'я", "Card type": "Тип картки", "Last 4 digits": "Останні 4 цифри", Expiry: "Термін дії", "Add name, expiry, and 4 card digits.": "Додайте ім'я, термін дії та 4 цифри картки.", "Payment method updated.": "Спосіб оплати оновлено.", "Payment method removed.": "Спосіб оплати видалено.",
    "Manage your weekly, monthly, 6 month, or annual membership plan.": "Керуйте тижневим, місячним, 6-місячним або річним планом підписки.", "Open the store for the iOS or Android mobile app.": "Відкрийте магазин для мобільного застосунку iOS або Android.", "Download on the": "Завантажити в", "Get it on": "Отримати в", "Download on the App Store": "Завантажити в App Store", "Get it on Google Play": "Отримати в Google Play", "Recent reminders": "Останні нагадування", "Clear reminders": "Очистити нагадування", Clear: "Ясно",
    Refresh: "Оновити", Restorative: "Відновлювальний", "Feeling check-in": "Перевірка почуттів", Mood: "Настрій", Soft: "М'яко", Heavy: "Важко", Tender: "Ніжно", "One thought": "Одна думка", "Save check-in": "Зберегти перевірку", "Quick prompts": "Швидкі підказки", "What is present right now?": "Що зараз присутнє?", Permission: "Дозвіл", "Next step": "Наступний крок", Gratitude: "Вдячність", "journal entries": "записи в щоденнику", "saved affirmations": "збережені афірмації", "support moments": "моменти підтримки", "reminders sent": "надіслані нагадування", "current access": "поточний доступ", "Daily Audio": "Щоденне аудіо", "Daily audio": "Щоденне аудіо", "Guided affirmations": "Керовані афірмації", "New session": "Нова сесія", "Press start, settle in, and listen.": "Натисніть старт, влаштуйтеся зручно й слухайте.", "Your daily affirmation will play with a soft voice, nature sound, and calm music.": "Ваша щоденна афірмація звучатиме м'яким голосом із природними звуками та спокійною музикою.", Start: "Старт", Pause: "Пауза", Stop: "Стоп", "Listening settings": "Налаштування прослуховування", Voice: "Голос", "Nature background": "Природний фон", "Forest rain": "Лісовий дощ", "Ocean waves": "Океанські хвилі", "Night calm": "Нічний спокій", "Soft wind": "М'який вітер", "Calm music": "Спокійна музика", "Gentle tones behind the voice": "Ніжні тони за голосом", "Session length": "Тривалість сесії", "About 3 minutes": "Близько 3 хвилин", "Stopped. Press start when you want to listen again.": "Зупинено. Натисніть старт, коли захочете слухати знову.", "Rest is not something I earn. It is something I am allowed to receive.": "Відпочинок - це не те, що я маю заслужити. Це те, що я можу прийняти."
  },
  ar: {
    "7 day trial": "تجربة 7 أيام", "View plans": "عرض الخطط", "Personal affirmation practice": "ممارسة شخصية للتوكيدات", "Sunlit notebook beside a cup and plant": "دفتر مضاء بالشمس بجانب كوب ونبتة", "Begin with one steady sentence. Leave the rest of your thoughts somewhere kind.": "ابدأ بجملة هادئة واحدة. اترك بقية أفكارك في مكان لطيف.", "Find my affirmation style": "اكتشف أسلوب توكيدي",
    "Stillnote will remember this language preference.": "سيتذكر Stillnote تفضيل اللغة هذا.", "Language saved": "تم حفظ اللغة", "Notifications saved": "تم حفظ الإشعارات", "Payment saved": "تم حفظ الدفع", "Payment removed": "تمت إزالة الدفع", "days left": "أيام متبقية", "Trial ended": "انتهت التجربة", "selected after trial": "مختارة بعد التجربة", ending: "تنتهي بـ", "Next reminder around": "التذكير التالي حوالي", reminder: "تذكير", "It is time to": "حان الوقت لـ", and: "و", "read today's affirmation": "قراءة توكيد اليوم", "write one honest thought": "كتابة فكرة صادقة", "take a small care pause": "أخذ وقفة عناية صغيرة", "take one steady moment for yourself": "أخذ لحظة هادئة لنفسك",
    "Not enabled": "غير مفعلة", Enabled: "مفعلة", Unsupported: "غير مدعومة", "In-app only": "داخل التطبيق فقط", "Browser notifications enabled": "تم تفعيل إشعارات المتصفح", "Browser notifications enabled.": "تم تفعيل إشعارات المتصفح.", "Notifications were not enabled.": "لم يتم تفعيل الإشعارات.",
    "Daily reminder time": "وقت التذكير اليومي", "Remind me to": "ذكرني بأن", "Read my affirmation": "قراءة توكيدي", "Write a quick journal entry": "كتابة ملاحظة يومية قصيرة", "Take a care pause": "أخذ وقفة عناية", "Quiet mode: keep reminders inside the app only": "الوضع الهادئ: إبقاء التذكيرات داخل التطبيق فقط",
    "Stillnote reminder": "تذكير Stillnote", "Stillnote test reminder": "تذكير اختبار Stillnote", "It is time to read today's affirmation, write one honest thought and take a small care pause.": "حان الوقت لقراءة توكيد اليوم، وكتابة فكرة صادقة، وأخذ وقفة عناية صغيرة.", "Browser notification when allowed": "إشعار المتصفح عند السماح", "Browser notifications work while Stillnote is open in this prototype. A production app can move this schedule to a backend or service worker.": "تعمل إشعارات المتصفح عندما يكون Stillnote مفتوحًا في هذا النموذج. يمكن للتطبيق النهائي نقل هذا الجدول إلى خادم أو عامل خدمة.", "Enable browser notifications": "تفعيل إشعارات المتصفح", "Send test": "إرسال اختبار", "No reminder scheduled": "لا يوجد تذكير مجدول", "Not scheduled": "غير مجدول", "Reminder history will appear here.": "سيظهر سجل التذكيرات هنا.", "Reminder history cleared.": "تم مسح سجل التذكيرات.",
    "Name on card": "الاسم على البطاقة", Name: "الاسم", "Card type": "نوع البطاقة", "Last 4 digits": "آخر 4 أرقام", Expiry: "تاريخ الانتهاء", "Add name, expiry, and 4 card digits.": "أضف الاسم وتاريخ الانتهاء و4 أرقام من البطاقة.", "Payment method updated.": "تم تحديث طريقة الدفع.", "Payment method removed.": "تمت إزالة طريقة الدفع.",
    "Manage your weekly, monthly, 6 month, or annual membership plan.": "أدر خطة عضويتك الأسبوعية أو الشهرية أو لمدة 6 أشهر أو السنوية.", "Open the store for the iOS or Android mobile app.": "افتح المتجر لتطبيق iOS أو Android.", "Download on the": "حمّل من", "Get it on": "احصل عليه من", "Download on the App Store": "حمّل من App Store", "Get it on Google Play": "احصل عليه من Google Play", "Recent reminders": "التذكيرات الأخيرة", "Clear reminders": "مسح التذكيرات", Clear: "واضح",
    Refresh: "تحديث", Restorative: "ترميمي", "Feeling check-in": "تسجيل المشاعر", Mood: "المزاج", Soft: "ناعم", Heavy: "ثقيل", Tender: "رقيق", "One thought": "فكرة واحدة", "Save check-in": "حفظ التسجيل", "Quick prompts": "مطالبات سريعة", "What is present right now?": "ما الموجود الآن؟", Permission: "إذن", "Next step": "الخطوة التالية", Gratitude: "امتنان", "journal entries": "مدخلات اليوميات", "saved affirmations": "توكيدات محفوظة", "support moments": "لحظات دعم", "reminders sent": "تذكيرات مرسلة", "current access": "الوصول الحالي", "Daily Audio": "الصوت اليومي", "Daily audio": "الصوت اليومي", "Guided affirmations": "توكيدات موجهة", "New session": "جلسة جديدة", "Press start, settle in, and listen.": "اضغط ابدأ، استقر، واستمع.", "Your daily affirmation will play with a soft voice, nature sound, and calm music.": "سيتم تشغيل توكيدك اليومي بصوت ناعم وأصوات طبيعة وموسيقى هادئة.", Start: "ابدأ", Pause: "إيقاف مؤقت", Stop: "إيقاف", "Listening settings": "إعدادات الاستماع", Voice: "الصوت", "Nature background": "خلفية طبيعية", "Forest rain": "مطر الغابة", "Ocean waves": "أمواج المحيط", "Night calm": "هدوء الليل", "Soft wind": "رياح ناعمة", "Calm music": "موسيقى هادئة", "Gentle tones behind the voice": "نغمات لطيفة خلف الصوت", "Session length": "مدة الجلسة", "About 3 minutes": "حوالي 3 دقائق", "Stopped. Press start when you want to listen again.": "تم الإيقاف. اضغط ابدأ عندما تريد الاستماع مرة أخرى.", "Rest is not something I earn. It is something I am allowed to receive.": "الراحة ليست شيئًا أكسبه. إنها شيء يُسمح لي بتلقيه."
  }
};

const fallbackTranslationAdditions = {
  "7 day trial": "7 day trial", "View plans": "View plans", "Personal affirmation practice": "Personal affirmation practice", "Sunlit notebook beside a cup and plant": "Sunlit notebook beside a cup and plant", "Begin with one steady sentence. Leave the rest of your thoughts somewhere kind.": "Begin with one steady sentence. Leave the rest of your thoughts somewhere kind.", "Find my affirmation style": "Find my affirmation style",
  "Stillnote will remember this language preference.": "Stillnote will remember this language preference.", "Language saved": "Language saved", "Notifications saved": "Notifications saved", "Payment saved": "Payment saved", "Payment removed": "Payment removed", "days left": "days left", "Trial ended": "Trial ended", "selected after trial": "selected after trial", ending: "ending", "Next reminder around": "Next reminder around", reminder: "reminder", "It is time to": "It is time to", and: "and", "read today's affirmation": "read today's affirmation", "write one honest thought": "write one honest thought", "take a small care pause": "take a small care pause", "take one steady moment for yourself": "take one steady moment for yourself",
  "Not enabled": "Not enabled", Enabled: "Enabled", Unsupported: "Unsupported", "In-app only": "In-app only", "Browser notifications enabled": "Browser notifications enabled", "Browser notifications enabled.": "Browser notifications enabled.", "Notifications were not enabled.": "Notifications were not enabled.",
  "Daily reminder time": "Daily reminder time", "Remind me to": "Remind me to", "Read my affirmation": "Read my affirmation", "Write a quick journal entry": "Write a quick journal entry", "Take a care pause": "Take a care pause", "Quiet mode: keep reminders inside the app only": "Quiet mode: keep reminders inside the app only",
  "Stillnote reminder": "Stillnote reminder", "Stillnote test reminder": "Stillnote test reminder", "It is time to read today's affirmation, write one honest thought and take a small care pause.": "It is time to read today's affirmation, write one honest thought and take a small care pause.", "Browser notification when allowed": "Browser notification when allowed", "Browser notifications work while Stillnote is open in this prototype. A production app can move this schedule to a backend or service worker.": "Browser notifications work while Stillnote is open in this prototype. A production app can move this schedule to a backend or service worker.", "Enable browser notifications": "Enable browser notifications", "Send test": "Send test", "No reminder scheduled": "No reminder scheduled", "Not scheduled": "Not scheduled", "Reminder history will appear here.": "Reminder history will appear here.", "Reminder history cleared.": "Reminder history cleared.",
  "Name on card": "Name on card", Name: "Name", "Card type": "Card type", "Last 4 digits": "Last 4 digits", Expiry: "Expiry", "Add name, expiry, and 4 card digits.": "Add name, expiry, and 4 card digits.", "Payment method updated.": "Payment method updated.", "Payment method removed.": "Payment method removed.",
  "Manage your weekly, monthly, 6 month, or annual membership plan.": "Manage your weekly, monthly, 6 month, or annual membership plan.", "Open the store for the iOS or Android mobile app.": "Open the store for the iOS or Android mobile app.", "Download on the": "Download on the", "Get it on": "Get it on", "Download on the App Store": "Download on the App Store", "Get it on Google Play": "Get it on Google Play", "Recent reminders": "Recent reminders", "Clear reminders": "Clear reminders", Clear: "Clear",
  Refresh: "Refresh", Restorative: "Restorative", "Feeling check-in": "Feeling check-in", Mood: "Mood", Soft: "Soft", Heavy: "Heavy", Tender: "Tender", "One thought": "One thought", "Save check-in": "Save check-in", "Quick prompts": "Quick prompts", "What is present right now?": "What is present right now?", Permission: "Permission", "Next step": "Next step", Gratitude: "Gratitude", "journal entries": "journal entries", "saved affirmations": "saved affirmations", "support moments": "support moments", "reminders sent": "reminders sent", "current access": "current access", "Daily Audio": "Daily Audio", "Daily audio": "Daily audio", "Guided affirmations": "Guided affirmations", "New session": "New session", "Press start, settle in, and listen.": "Press start, settle in, and listen.", "Your daily affirmation will play with a clear voice and soft nature sound.": "Your daily affirmation will play with a clear voice and soft nature sound.", "Your daily affirmation will play with a soft voice, nature sound, and calm music.": "Your daily affirmation will play with a soft voice, nature sound, and calm music.", Start: "Start", Pause: "Pause", Stop: "Stop", "Listening settings": "Listening settings", Voice: "Voice", "Voice volume": "Voice volume", "Background volume": "Background volume", "Nature volume": "Nature volume", "Nature background": "Nature background", "Forest rain": "Forest rain", "Forest birds": "Forest birds", "Ocean waves": "Ocean waves", "Night calm": "Night calm", "Soft wind": "Soft wind", "Gentle creek": "Gentle creek", "Distant waterfall": "Distant waterfall", "Morning birds": "Morning birds", "Soft thunder rain": "Soft thunder rain", "Lake shore": "Lake shore", "Leaves and breeze": "Leaves and breeze", "Calm music": "Calm music", "Gentle tones behind the voice": "Gentle tones behind the voice", "Session length": "Session length", "About 3 minutes": "About 3 minutes", "Stopped. Press start when you want to listen again.": "Stopped. Press start when you want to listen again.", "Rest is not something I earn. It is something I am allowed to receive.": "Rest is not something I earn. It is something I am allowed to receive."
};

Object.keys(uiTranslations).forEach((languageCode) => {
  Object.assign(uiTranslations[languageCode], fallbackTranslationAdditions, translationAdditions[languageCode]);
});

const affirmationProfiles = {
  restore: {
    label: "Restorative",
    title: "Restorative affirmations",
    summary: "Soft, regulating affirmations may resonate most right now. They focus on rest, permission, and nervous system steadiness.",
    affirmations: [
      "I can move through this day at a human pace.",
      "Rest is not something I earn. It is something I am allowed to receive.",
      "I do not have to solve everything before I can breathe.",
      "My needs are real, and I can meet them gently.",
      "A slower rhythm can still carry me forward."
    ],
    sample: "I am allowed to soften without falling behind."
  },
  courage: {
    label: "Courage",
    title: "Courage affirmations",
    summary: "Direct, brave affirmations may fit this season. They support decisions, boundaries, and trusting your own voice.",
    affirmations: [
      "I can be kind and still be clear.",
      "My voice is allowed to take up honest space.",
      "I can choose the next right step without seeing the whole road.",
      "A boundary can be an act of care.",
      "I trust the part of me that knows when it is time to change."
    ],
    sample: "I can choose myself without abandoning my compassion."
  },
  belonging: {
    label: "Self-worth",
    title: "Self-worth affirmations",
    summary: "Warm, identity-rooted affirmations may land best. They reinforce belonging, tenderness, and unconditional worth.",
    affirmations: [
      "I belong to myself before I have to prove anything.",
      "My worth is not waiting at the end of a perfect day.",
      "I can speak to myself with the tenderness I needed sooner.",
      "I am still lovable when I am learning.",
      "I can let care reach the parts of me I usually hide."
    ],
    sample: "I do not need to become easier to love."
  },
  momentum: {
    label: "Momentum",
    title: "Momentum affirmations",
    summary: "Focused, energizing affirmations may help most. They build consistency through small, repeatable choices.",
    affirmations: [
      "Small choices count, especially when I repeat them.",
      "I can begin before I feel perfectly ready.",
      "Progress can be quiet and still be real.",
      "I keep promises to myself in doable ways.",
      "My future is shaped by the next honest step."
    ],
    sample: "I can make today simple enough to follow through."
  },
  balanced: {
    label: "Balanced",
    title: "Balanced affirmations",
    summary: "A blended style may fit right now, with a mix of grounding, tenderness, and forward motion.",
    affirmations: [
      "I can meet this moment with honesty and care.",
      "I am allowed to need support and still be strong.",
      "My feelings can be heard without running the whole day.",
      "I can return to myself one breath at a time.",
      "I am building a life that has room for me."
    ],
    sample: "I can be present with myself without pressure."
  }
};

const prompts = [
  "What am I carrying that I can set down for today?",
  "What would feel kind to admit right now?",
  "Where did I show quiet strength recently?",
  "What do I need more of this week?",
  "What truth is asking for more space?",
  "What would I say to a friend in this exact moment?",
  "Where can I give myself less pressure?",
  "What feeling needs a name before it can soften?"
];

const plans = {
  weekly: { name: "Weekly", price: "$3.99" },
  monthly: { name: "Monthly", price: "$11.99" },
  sixMonth: { name: "6 month", price: "$59.99" },
  annual: { name: "Annual", price: "$89.99" }
};

const voiceProfiles = {
  rowan: {
    name: "Rowan",
    gender: "male",
    rate: 0.82,
    pitch: 0.92,
    preferredNames: ["Daniel", "Oliver", "Arthur", "Thomas", "Alex", "Aaron", "Google UK English Male", "Microsoft George", "Microsoft David"]
  },
  atlas: {
    name: "Atlas",
    gender: "male",
    rate: 0.78,
    pitch: 0.86,
    preferredNames: ["Oliver", "Daniel", "Arthur", "Thomas", "Alex", "Google UK English Male", "Microsoft George", "Microsoft David"]
  },
  luna: {
    name: "Luna",
    gender: "female",
    rate: 0.82,
    pitch: 1,
    preferredNames: ["Samantha", "Ava", "Allison", "Susan", "Victoria", "Moira", "Tessa", "Serena", "Karen", "Google US English", "Microsoft Zira"]
  },
  sienna: {
    name: "Sienna",
    gender: "female",
    rate: 0.8,
    pitch: 0.96,
    preferredNames: ["Moira", "Serena", "Tessa", "Samantha", "Ava", "Allison", "Susan", "Karen", "Google UK English Female", "Microsoft Hazel"]
  }
};

const meditations = {
  morning: {
    title: "Morning 3 minute meditation",
    minutes: 3,
    purpose: "morning",
    script: "Let your shoulders soften. Notice the room around you. Take one slow breath in, and one easy breath out. Today does not need to be perfect to be meaningful. Choose one feeling you want to carry gently, then name one small action that would support it."
  },
  reset: {
    title: "Reset 4 minute meditation",
    minutes: 4,
    purpose: "reset",
    script: "Pause where you are. Unclench your jaw. Let your hands rest. Breathe in for four, hold for two, and release for six. You are allowed to begin again without proving anything. Ask yourself: what is the kindest next step I can actually do?"
  },
  nap: {
    title: "Nap 5 minute meditation",
    minutes: 5,
    purpose: "nap",
    script: "Let your body be supported. There is nothing to solve for these few minutes. Imagine each exhale lowering the volume of the day. If thoughts arrive, let them pass by like distant sound. Rest is useful. Rest is allowed."
  },
  bedtime: {
    title: "Bedtime 5 minute meditation",
    minutes: 5,
    purpose: "bedtime",
    script: "Let the day be complete enough. Place one hand near your heart or belly. Notice one thing you survived, one thing you learned, and one thing you can release until tomorrow. Your worth is not measured by how much you finished today."
  }
};

const badgeCatalog = [
  { id: "firstLogin", icon: "ID", title: "Known Here", description: "Log in and make the space yours.", isUnlocked: ({ account }) => Boolean(account) },
  { id: "firstJournal", icon: "J1", title: "First Reflection", description: "Save your first journal entry.", isUnlocked: ({ entries }) => entries.length >= 1 },
  { id: "threeEntries", icon: "J3", title: "Gentle Pattern", description: "Save 3 journal entries.", isUnlocked: ({ entries }) => entries.length >= 3 },
  { id: "affirmationSaved", icon: "A", title: "Keeper", description: "Save an affirmation.", isUnlocked: ({ saved }) => saved.length >= 1 },
  { id: "chatOpened", icon: "M", title: "Mira Met", description: "Talk with Mira.", isUnlocked: ({ chat }) => chat.some((message) => message.role === "user") },
  { id: "voiceUsed", icon: "V", title: "Voice Brave", description: "Send a voice note.", isUnlocked: ({ chat }) => chat.some((message) => message.voice) },
  { id: "meditation", icon: "3m", title: "Quiet Minute", description: "Start a guided meditation.", isUnlocked: ({ meditations: items }) => items.length >= 1 },
  { id: "audioAffirmation", icon: "AU", title: "Guided Start", description: "Listen to a daily audio affirmation.", isUnlocked: ({ audioSessions }) => audioSessions.length >= 1 },
  { id: "quizComplete", icon: "Q", title: "Matched", description: "Complete the affirmation quiz.", isUnlocked: ({ profile }) => profile !== "balanced" },
  { id: "careMoment", icon: "C", title: "Care Taken", description: "Save a support moment.", isUnlocked: ({ support }) => support.length >= 1 },
  { id: "reminder", icon: "R", title: "Remembered", description: "Send or receive a reminder.", isUnlocked: ({ notificationLog }) => notificationLog.length >= 1 }
];

let currentMood = "soft";
let currentAffirmation = "";
let breathTimer;
let breathStep = 0;
let breathRemaining = 4;
let toastTimer;
let chatTone = "gentle";
let notificationTimer;
let recognition;
let isRecordingVoice = false;
let isTranslating = false;
let translationObserver;
let activeSpeechTimeout;
let activeSpeechMode = "";
let activeSpeechToken = 0;
let availableSpeechVoices = [];
let audioContext;
let soundscapeNodes = [];
let soundscapeMasterGain;
let naturePreviewTimer;
let audioAffirmationLines = [];
let audioAffirmationIndex = 0;
let isAudioAffirmationPlaying = false;
let isAudioAffirmationPaused = false;

const textSources = new WeakMap();
const attributeSources = new WeakMap();

const breathSequence = [
  { phase: "Inhale", seconds: 4, className: "expand" },
  { phase: "Hold", seconds: 4, className: "hold" },
  { phase: "Exhale", seconds: 6, className: "release" },
  { phase: "Rest", seconds: 2, className: "" }
];

const elements = {
  views: document.querySelectorAll(".view"),
  navButtons: document.querySelectorAll("[data-view-target]"),
  dailyAffirmation: document.querySelector("#dailyAffirmation"),
  profilePill: document.querySelector("#profilePill"),
  newAffirmationButton: document.querySelector("#newAffirmationButton"),
  saveAffirmationButton: document.querySelector("#saveAffirmationButton"),
  audioProfilePill: document.querySelector("#audioProfilePill"),
  refreshAudioAffirmationButton: document.querySelector("#refreshAudioAffirmationButton"),
  affirmationAudioStatus: document.querySelector("#affirmationAudioStatus"),
  startAudioAffirmationButton: document.querySelector("#startAudioAffirmationButton"),
  pauseAudioAffirmationButton: document.querySelector("#pauseAudioAffirmationButton"),
  stopAudioAffirmationButton: document.querySelector("#stopAudioAffirmationButton"),
  affirmationVoiceSelect: document.querySelector("#affirmationVoiceSelect"),
  ambienceSelect: document.querySelector("#ambienceSelect"),
  voiceVolume: document.querySelector("#voiceVolume"),
  voiceVolumeLabel: document.querySelector("#voiceVolumeLabel"),
  natureVolume: document.querySelector("#natureVolume"),
  natureVolumeLabel: document.querySelector("#natureVolumeLabel"),
  previewNatureButton: document.querySelector("#previewNatureButton"),
  quickThought: document.querySelector("#quickThought"),
  quickSaveButton: document.querySelector("#quickSaveButton"),
  moodButtons: document.querySelectorAll(".mood-button"),
  entryCount: document.querySelector("#entryCount"),
  savedCount: document.querySelector("#savedCount"),
  supportCount: document.querySelector("#supportCount"),
  reminderCount: document.querySelector("#reminderCount"),
  planLabel: document.querySelector("#planLabel"),
  trialDays: document.querySelector("#trialDays"),
  accountName: document.querySelector("#accountName"),
  accountEyebrow: document.querySelector("#accountEyebrow"),
  accountActionButton: document.querySelector("#accountActionButton"),
  loginForm: document.querySelector("#loginForm"),
  loginName: document.querySelector("#loginName"),
  loginEmail: document.querySelector("#loginEmail"),
  loginSubmitButton: document.querySelector("#loginForm button[type='submit']"),
  loginStatus: document.querySelector("#loginStatus"),
  logoutButton: document.querySelector("#logoutButton"),
  badgeGrid: document.querySelector("#badgeGrid"),
  badgeCount: document.querySelector("#badgeCount"),
  journalForm: document.querySelector("#journalForm"),
  journalMood: document.querySelector("#journalMood"),
  journalPrompt: document.querySelector("#journalPrompt"),
  journalText: document.querySelector("#journalText"),
  clearJournalButton: document.querySelector("#clearJournalButton"),
  entriesList: document.querySelector("#entriesList"),
  lastSaved: document.querySelector("#lastSaved"),
  quizForm: document.querySelector("#quizForm"),
  quizResult: document.querySelector("#quizResult"),
  resultType: document.querySelector("#resultType"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  resultSample: document.querySelector("#resultSample"),
  resetQuizButton: document.querySelector("#resetQuizButton"),
  pricingGrid: document.querySelector("#pricingGrid"),
  selectedPlanStatus: document.querySelector("#selectedPlanStatus"),
  breathButton: document.querySelector("#breathButton"),
  breathResetButton: document.querySelector("#breathResetButton"),
  breathPhase: document.querySelector("#breathPhase"),
  breathCount: document.querySelector("#breathCount"),
  breathOrb: document.querySelector("#breathOrb"),
  groundingList: document.querySelector("#groundingList"),
  groundingCount: document.querySelector("#groundingCount"),
  careOptions: document.querySelector("#careOptions"),
  careCount: document.querySelector("#careCount"),
  saveSupportButton: document.querySelector("#saveSupportButton"),
  supportNote: document.querySelector("#supportNote"),
  copySupportNoteButton: document.querySelector("#copySupportNoteButton"),
  affirmationLibrary: document.querySelector("#affirmationLibrary"),
  libraryCount: document.querySelector("#libraryCount"),
  supportList: document.querySelector("#supportList"),
  supportLastSaved: document.querySelector("#supportLastSaved"),
  chatLog: document.querySelector("#chatLog"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  chatProfileNote: document.querySelector("#chatProfileNote"),
  chatToneButtons: document.querySelectorAll(".tone-button"),
  voiceSelect: document.querySelector("#voiceSelect"),
  voiceMessageButton: document.querySelector("#voiceMessageButton"),
  voiceStatus: document.querySelector("#voiceStatus"),
  playVoiceButton: document.querySelector("#playVoiceButton"),
  stopVoiceButton: document.querySelector("#stopVoiceButton"),
  audioVoiceQuality: document.querySelector("#audioVoiceQuality"),
  meditationButtons: document.querySelectorAll("[data-meditation]"),
  clearChatButton: document.querySelector("#clearChatButton"),
  saveChatInsightButton: document.querySelector("#saveChatInsightButton"),
  notificationStatus: document.querySelector("#notificationStatus"),
  enableNotificationsButton: document.querySelector("#enableNotificationsButton"),
  testNotificationButton: document.querySelector("#testNotificationButton"),
  notificationPreview: document.querySelector("#notificationPreview"),
  notificationLog: document.querySelector("#notificationLog"),
  clearNotificationsButton: document.querySelector("#clearNotificationsButton"),
  settingsStatus: document.querySelector("#settingsStatus"),
  themeStatus: document.querySelector("#themeStatus"),
  themeButtons: document.querySelectorAll(".theme-button"),
  languageSelect: document.querySelector("#languageSelect"),
  languageStatus: document.querySelector("#languageStatus"),
  languagePreview: document.querySelector("#languagePreview"),
  settingsNotificationForm: document.querySelector("#settingsNotificationForm"),
  settingsNotificationSummary: document.querySelector("#settingsNotificationSummary"),
  settingsReminderTime: document.querySelector("#settingsReminderTime"),
  settingsNotifyAffirmation: document.querySelector("#settingsNotifyAffirmation"),
  settingsNotifyJournal: document.querySelector("#settingsNotifyJournal"),
  settingsNotifyCare: document.querySelector("#settingsNotifyCare"),
  settingsQuietMode: document.querySelector("#settingsQuietMode"),
  paymentForm: document.querySelector("#paymentForm"),
  paymentStatus: document.querySelector("#paymentStatus"),
  paymentName: document.querySelector("#paymentName"),
  paymentBrand: document.querySelector("#paymentBrand"),
  paymentLast4: document.querySelector("#paymentLast4"),
  paymentExpiry: document.querySelector("#paymentExpiry"),
  clearPaymentButton: document.querySelector("#clearPaymentButton"),
  settingsPlanStatus: document.querySelector("#settingsPlanStatus"),
  toast: document.querySelector("#toast")
};

elements.nextReminderLabel = elements.settingsNotificationSummary;
elements.reminderTime = elements.settingsReminderTime;
elements.notifyAffirmation = elements.settingsNotifyAffirmation;
elements.notifyJournal = elements.settingsNotifyJournal;
elements.notifyCare = elements.settingsNotifyCare;
elements.quietMode = elements.settingsQuietMode;

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getAccount() {
  return readJSON(storageKeys.account, null);
}

function renderAccount() {
  const account = getAccount();
  if (!account) {
    elements.accountName.textContent = "Guest";
    elements.accountEyebrow.textContent = "Your space";
    elements.accountActionButton.textContent = "Log in";
    elements.loginStatus.textContent = "Not logged in";
    elements.loginSubmitButton.textContent = "Log in";
    elements.logoutButton.disabled = true;
    return;
  }

  elements.accountName.textContent = account.name;
  elements.accountEyebrow.textContent = "Welcome back";
  elements.accountActionButton.textContent = "Account";
  elements.loginStatus.textContent = account.email;
  elements.loginSubmitButton.textContent = "Update account";
  elements.loginName.value = account.name;
  elements.loginEmail.value = account.email;
  elements.logoutButton.disabled = false;
}

function activitySnapshot() {
  return {
    account: getAccount(),
    entries: readJSON(storageKeys.entries, []),
    saved: readJSON(storageKeys.saved, []),
    support: readJSON(storageKeys.support, []),
    chat: readJSON(storageKeys.chat, []),
    meditations: readJSON(storageKeys.meditations, []),
    audioSessions: readJSON(storageKeys.audioSessions, []),
    notificationLog: readJSON(storageKeys.notificationLog, []),
    profile: getProfileKey()
  };
}

function renderBadges() {
  const snapshot = activitySnapshot();
  const unlocked = new Set(readJSON(storageKeys.badges, []));
  elements.badgeGrid.innerHTML = "";

  badgeCatalog.forEach((badge) => {
    const earned = unlocked.has(badge.id) || badge.isUnlocked(snapshot);
    const item = document.createElement("article");
    item.className = `badge-item${earned ? "" : " locked"}`;
    item.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div>
        <strong>${escapeHTML(badge.title)}</strong>
        <span>${escapeHTML(earned ? "Unlocked" : badge.description)}</span>
      </div>
    `;
    elements.badgeGrid.append(item);
  });

  const earnedCount = badgeCatalog.filter((badge) => unlocked.has(badge.id) || badge.isUnlocked(snapshot)).length;
  elements.badgeCount.textContent = `${earnedCount} unlocked`;
}

function checkBadges() {
  const snapshot = activitySnapshot();
  const unlocked = new Set(readJSON(storageKeys.badges, []));
  const newlyEarned = [];

  badgeCatalog.forEach((badge) => {
    if (!unlocked.has(badge.id) && badge.isUnlocked(snapshot)) {
      unlocked.add(badge.id);
      newlyEarned.push(badge);
    }
  });

  if (newlyEarned.length) {
    writeJSON(storageKeys.badges, [...unlocked]);
    showToast(`Badge earned: ${newlyEarned[0].title}`);
  }

  renderBadges();
}

function currentLanguage() {
  return localStorage.getItem(storageKeys.language) || "en";
}

function translatePhrase(source) {
  if (currentLanguage() === "en") return source;
  const translations = uiTranslations[currentLanguage()] || {};
  if (translations[source]) return translations[source];

  const daysLeft = source.match(/^(\d+) days left$/);
  if (daysLeft && translations["days left"]) return `${daysLeft[1]} ${translations["days left"]}`;

  const selectedPlan = source.match(/^(.+) selected after trial$/);
  if (selectedPlan && translations["selected after trial"]) {
    return `${translatePhrase(selectedPlan[1])} ${translations["selected after trial"]}`;
  }

  const ending = source.match(/^(.+) ending (\d{4})$/);
  if (ending && translations.ending) return `${ending[1]} ${translations.ending} ${ending[2]}`;

  const nextReminder = source.match(/^Next reminder around (.+)$/);
  if (nextReminder && translations["Next reminder around"]) {
    return `${translations["Next reminder around"]} ${nextReminder[1]}`;
  }

  const reminder = source.match(/^(.+) reminder$/);
  if (reminder && translations.reminder) return `${reminder[1]} ${translations.reminder}`;

  const timeTo = source.match(/^It is time to (.+)\.$/);
  if (timeTo && translations["It is time to"]) return `${translations["It is time to"]} ${translatePhrase(timeTo[1])}.`;

  return source;
}

function withOriginalWhitespace(original, translated) {
  const leading = original.match(/^\s*/)?.[0] || "";
  const trailing = original.match(/\s*$/)?.[0] || "";
  return `${leading}${translated}${trailing}`;
}

function translateElementAttributes(element) {
  const attributes = ["placeholder", "aria-label", "title", "alt"];
  attributes.forEach((attribute) => {
    if (!element.hasAttribute(attribute)) return;
    const sources = attributeSources.get(element) || {};
    const source = sources[attribute] || element.getAttribute(attribute);
    sources[attribute] = source;
    attributeSources.set(element, sources);
    element.setAttribute(attribute, translatePhrase(source));
  });
}

function applyTranslations(root = document.body) {
  if (!root || isTranslating) return;
  isTranslating = true;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("script, style, noscript")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const source = textSources.get(node) || node.nodeValue.trim();
    textSources.set(node, source);
    node.nodeValue = withOriginalWhitespace(node.nodeValue, translatePhrase(source));
  });

  root.querySelectorAll?.("[placeholder], [aria-label], [title], img[alt]").forEach(translateElementAttributes);
  isTranslating = false;
}

function startTranslationObserver() {
  if (translationObserver) return;
  translationObserver = new MutationObserver(() => {
    if (!isTranslating) applyTranslations();
  });
  translationObserver.observe(document.body, { childList: true, subtree: true });
}

function setSavedNotice(message = "Saved locally") {
  elements.settingsStatus.textContent = translatePhrase(message);
  setTimeout(() => {
    elements.settingsStatus.textContent = translatePhrase("Saved locally");
  }, 1800);
}

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `entry-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getProfileKey() {
  return localStorage.getItem(storageKeys.profile) || "balanced";
}

function getProfile() {
  return affirmationProfiles[getProfileKey()] || affirmationProfiles.balanced;
}

function dateSeed() {
  const today = new Date();
  return Number(`${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`);
}

function pickDailyAffirmation(offset = 0) {
  const profile = getProfile();
  const index = Math.abs(dateSeed() + offset) % profile.affirmations.length;
  currentAffirmation = profile.affirmations[index];
  elements.dailyAffirmation.textContent = currentAffirmation;
  elements.profilePill.textContent = profile.label;
  elements.audioProfilePill.textContent = profile.label;
}

function showView(target) {
  elements.views.forEach((view) => view.classList.remove("is-visible"));
  document.querySelector(`#${target}View`)?.classList.add("is-visible");
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === target);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = translatePhrase(message);
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2600);
}

function saveEntry({ mood, prompt, text }) {
  const entries = readJSON(storageKeys.entries, []);
  const entry = {
    id: createId(),
    mood,
    prompt,
    text: text.trim(),
    createdAt: new Date().toISOString()
  };
  writeJSON(storageKeys.entries, [entry, ...entries].slice(0, 50));
  renderEntries();
  updateMetrics();
}

function renderEntries() {
  const entries = readJSON(storageKeys.entries, []);
  elements.entriesList.innerHTML = "";

  if (!entries.length) {
    elements.entriesList.innerHTML = '<p class="empty-state">Your saved reflections will appear here.</p>';
    elements.lastSaved.textContent = "No entries yet";
    return;
  }

  elements.lastSaved.textContent = new Date(entries[0].createdAt).toLocaleDateString([], {
    month: "short",
    day: "numeric"
  });

  entries.slice(0, 8).forEach((entry) => {
    const item = document.createElement("article");
    item.className = "entry-item";
    item.innerHTML = `
      <div class="entry-meta">
        <span>${new Date(entry.createdAt).toLocaleDateString([], { month: "short", day: "numeric" })}</span>
        <span>${entry.mood}</span>
      </div>
      <strong>${entry.prompt}</strong>
      <p>${escapeHTML(entry.text)}</p>
    `;
    elements.entriesList.append(item);
  });
}

function escapeHTML(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function updateMetrics() {
  const entries = readJSON(storageKeys.entries, []);
  const saved = readJSON(storageKeys.saved, []);
  const support = readJSON(storageKeys.support, []);
  const notificationLog = readJSON(storageKeys.notificationLog, []);
  const selectedPlan = localStorage.getItem(storageKeys.plan);
  elements.entryCount.textContent = entries.length;
  elements.savedCount.textContent = saved.length;
  elements.supportCount.textContent = support.length;
  elements.reminderCount.textContent = notificationLog.length;
  elements.planLabel.textContent = selectedPlan ? plans[selectedPlan].name : "Trial";
  elements.settingsPlanStatus.textContent = selectedPlan ? plans[selectedPlan].name : "Trial";
  elements.selectedPlanStatus.textContent = selectedPlan
    ? `${plans[selectedPlan].name} selected after trial`
    : "No plan selected";
  checkBadges();
}

function updateTrial() {
  let start = localStorage.getItem(storageKeys.trialStart);
  if (!start) {
    start = new Date().toISOString();
    localStorage.setItem(storageKeys.trialStart, start);
  }

  const elapsed = Date.now() - new Date(start).getTime();
  const remaining = Math.max(0, 7 - Math.floor(elapsed / 86400000));
  elements.trialDays.textContent = remaining > 0 ? `${remaining} days left` : "Trial ended";
}

function scoreQuiz(formData) {
  const scores = { restore: 0, courage: 0, belonging: 0, momentum: 0 };
  ["situation", "struggle", "lifestyle", "energy", "supportStyle", "timing"].forEach((name) => {
    const value = formData.get(name);
    if (scores[value] !== undefined) scores[value] += 1;
  });

  const tone = formData.get("tone");
  if (tone === "gentle") scores.restore += 0.5;
  if (tone === "clear") scores.belonging += 0.5;
  if (tone === "bold") scores.courage += 0.5;

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function renderQuizResult(profileKey) {
  const profile = affirmationProfiles[profileKey];
  elements.resultType.textContent = profile.label;
  elements.resultTitle.textContent = profile.title;
  elements.resultSummary.textContent = profile.summary;
  elements.resultSample.textContent = profile.sample;
  elements.quizResult.hidden = false;
}

function defaultNotificationPrefs() {
  return {
    enabled: false,
    time: "09:00",
    types: ["affirmation", "journal"],
    quietMode: false
  };
}

function getNotificationPrefs() {
  return { ...defaultNotificationPrefs(), ...readJSON(storageKeys.notificationPrefs, {}) };
}

function getReminderTypes() {
  const types = [];
  if (elements.notifyAffirmation.checked) types.push("affirmation");
  if (elements.notifyJournal.checked) types.push("journal");
  if (elements.notifyCare.checked) types.push("care");
  return types;
}

function getSettingsReminderTypes() {
  const types = [];
  if (elements.settingsNotifyAffirmation.checked) types.push("affirmation");
  if (elements.settingsNotifyJournal.checked) types.push("journal");
  if (elements.settingsNotifyCare.checked) types.push("care");
  return types;
}

function reminderMessage(types = getNotificationPrefs().types) {
  const parts = {
    affirmation: "read today's affirmation",
    journal: "write one honest thought",
    care: "take a small care pause"
  };
  const selected = types.map((type) => parts[type]).filter(Boolean);
  if (!selected.length) return "take one steady moment for yourself";
  if (selected.length === 1) return selected[0];
  return `${selected.slice(0, -1).join(", ")} and ${selected.at(-1)}`;
}

function formatTimeLabel(value) {
  const [hour, minute] = value.split(":").map(Number);
  return new Date(2026, 0, 1, hour, minute).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function updateNotificationStatus() {
  const prefs = getNotificationPrefs();
  const supported = "Notification" in window;
  const permission = supported ? Notification.permission : "unsupported";

  if (prefs.quietMode) {
    elements.notificationStatus.textContent = "In-app only";
  } else if (!supported) {
    elements.notificationStatus.textContent = "Unsupported";
  } else if (permission === "granted" && prefs.enabled) {
    elements.notificationStatus.textContent = "Enabled";
  } else if (permission === "denied") {
    elements.notificationStatus.textContent = "Blocked";
  } else {
    elements.notificationStatus.textContent = "Not enabled";
  }

  elements.enableNotificationsButton.disabled = !supported || permission === "denied";
  elements.enableNotificationsButton.textContent =
    supported && permission === "granted" ? "Browser notifications enabled" : "Enable browser notifications";
}

function renderNotificationPrefs() {
  const prefs = getNotificationPrefs();
  elements.reminderTime.value = prefs.time;
  elements.notifyAffirmation.checked = prefs.types.includes("affirmation");
  elements.notifyJournal.checked = prefs.types.includes("journal");
  elements.notifyCare.checked = prefs.types.includes("care");
  elements.quietMode.checked = prefs.quietMode;
  elements.nextReminderLabel.textContent = prefs.enabled
    ? `Next reminder around ${formatTimeLabel(prefs.time)}`
    : "No reminder scheduled";
  elements.settingsReminderTime.value = prefs.time;
  elements.settingsNotifyAffirmation.checked = prefs.types.includes("affirmation");
  elements.settingsNotifyJournal.checked = prefs.types.includes("journal");
  elements.settingsNotifyCare.checked = prefs.types.includes("care");
  elements.settingsQuietMode.checked = prefs.quietMode;
  elements.settingsNotificationSummary.textContent = prefs.enabled
    ? `${formatTimeLabel(prefs.time)} reminder`
    : "Not scheduled";
  elements.notificationPreview.innerHTML = `
    <strong>Stillnote reminder</strong>
    <p>It is time to ${escapeHTML(reminderMessage(prefs.types))}.</p>
    <span>${prefs.quietMode ? "In-app only" : "Browser notification when allowed"}</span>
  `;
  updateNotificationStatus();
}

function saveNotificationPrefs(enabled = getNotificationPrefs().enabled) {
  saveNotificationPrefsFromValues({
    enabled,
    time: elements.reminderTime.value || "09:00",
    types: getReminderTypes(),
    quietMode: elements.quietMode.checked
  });
}

function saveNotificationPrefsFromSettings(enabled = getNotificationPrefs().enabled) {
  saveNotificationPrefsFromValues({
    enabled,
    time: elements.settingsReminderTime.value || "09:00",
    types: getSettingsReminderTypes(),
    quietMode: elements.settingsQuietMode.checked
  });
}

function saveNotificationPrefsFromValues(prefs) {
  writeJSON(storageKeys.notificationPrefs, prefs);
  renderNotificationPrefs();
  scheduleNotificationCheck();
}

function applyTheme(theme) {
  const selectedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selectedTheme;
  localStorage.setItem(storageKeys.theme, selectedTheme);
  elements.themeStatus.textContent = selectedTheme === "dark" ? "Dark" : "Light";
  elements.themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.themeChoice === selectedTheme);
  });
}

function applyLanguage(languageCode) {
  const selectedLanguage = languages[languageCode] ? languageCode : "en";
  localStorage.setItem(storageKeys.language, selectedLanguage);
  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir = ["ar", "he", "ur"].includes(selectedLanguage) ? "rtl" : "ltr";
  elements.languageSelect.value = selectedLanguage;
  elements.languageStatus.textContent = languages[selectedLanguage];
  elements.languagePreview.textContent = `${languages[selectedLanguage]} ${translatePhrase("is selected as the app language.")}`;
  applyTranslations();
}

function renderPaymentMethod() {
  const payment = readJSON(storageKeys.payment, null);
  if (!payment) {
    elements.paymentStatus.textContent = "No card saved";
    elements.paymentName.value = "";
    elements.paymentBrand.value = "Visa";
    elements.paymentLast4.value = "";
    elements.paymentExpiry.value = "";
    return;
  }

  elements.paymentName.value = payment.name || "";
  elements.paymentBrand.value = payment.brand || "Visa";
  elements.paymentLast4.value = payment.last4 || "";
  elements.paymentExpiry.value = payment.expiry || "";
  elements.paymentStatus.textContent = `${payment.brand} ending ${payment.last4}`;
}

function savePaymentMethod() {
  const last4 = elements.paymentLast4.value.replace(/\D/g, "").slice(0, 4);
  const expiry = elements.paymentExpiry.value.trim();
  const name = elements.paymentName.value.trim();

  if (last4.length !== 4 || !expiry || !name) {
    showToast("Add name, expiry, and 4 card digits.");
    return;
  }

  const payment = {
    name,
    brand: elements.paymentBrand.value,
    last4,
    expiry,
    updatedAt: new Date().toISOString()
  };
  writeJSON(storageKeys.payment, payment);
  renderPaymentMethod();
  setSavedNotice("Payment saved");
  showToast("Payment method updated.");
}

function clearPaymentMethod() {
  localStorage.removeItem(storageKeys.payment);
  renderPaymentMethod();
  setSavedNotice("Payment removed");
  showToast("Payment method removed.");
}

function logNotification(title, body) {
  const log = readJSON(storageKeys.notificationLog, []);
  writeJSON(storageKeys.notificationLog, [
    { id: createId(), title, body, createdAt: new Date().toISOString() },
    ...log
  ].slice(0, 20));
  renderNotificationLog();
  updateMetrics();
}

function sendReminderNotification(source = "scheduled") {
  const prefs = getNotificationPrefs();
  const title = source === "test" ? "Stillnote test reminder" : "Stillnote reminder";
  const body = `It is time to ${reminderMessage(prefs.types)}.`;

  if (!prefs.quietMode && "Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }

  logNotification(title, body);
  showToast(body);
}

function renderNotificationLog() {
  const log = readJSON(storageKeys.notificationLog, []);
  elements.notificationLog.innerHTML = "";

  if (!log.length) {
    elements.notificationLog.innerHTML = '<p class="empty-state">Reminder history will appear here.</p>';
    return;
  }

  log.slice(0, 6).forEach((item) => {
    const row = document.createElement("article");
    row.className = "entry-item";
    row.innerHTML = `
      <div class="entry-meta">
        <span>${new Date(item.createdAt).toLocaleDateString([], { month: "short", day: "numeric" })}</span>
        <span>${new Date(item.createdAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
      </div>
      <strong>${escapeHTML(item.title)}</strong>
      <p>${escapeHTML(item.body)}</p>
    `;
    elements.notificationLog.append(row);
  });
}

function scheduleNotificationCheck() {
  clearInterval(notificationTimer);
  notificationTimer = setInterval(checkDailyReminder, 60000);
  checkDailyReminder();
}

function checkDailyReminder() {
  const prefs = getNotificationPrefs();
  if (!prefs.enabled || !prefs.types.length) return;

  const now = new Date();
  const todayKey = now.toISOString().slice(0, 10);
  const lastSent = localStorage.getItem(storageKeys.notificationLastSent);
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  if (lastSent === `${todayKey}:${prefs.time}` || currentTime !== prefs.time) return;

  localStorage.setItem(storageKeys.notificationLastSent, `${todayKey}:${prefs.time}`);
  sendReminderNotification("scheduled");
}

function starterChatMessages() {
  return [
    {
      id: createId(),
      role: "assistant",
      text: "I am Mira. I am here to listen first, not rush you into fixing yourself. You can say the messy version here, type a little or use a voice note, and I will stay with what you actually mean.",
      createdAt: new Date().toISOString()
    }
  ];
}

function readChat() {
  const messages = readJSON(storageKeys.chat, []);
  if (!messages.length) return starterChatMessages();
  let migrated = [...messages];
  if (
    migrated[0]?.role === "assistant" &&
    (migrated[0].text.startsWith("I am here with you.") || migrated[0].text.startsWith("I am Mira. This can be a softer place"))
  ) {
    const [intro] = starterChatMessages();
    migrated = [{ ...migrated[0], text: intro.text }, ...migrated.slice(1)];
  }

  migrated = migrated.map((message, index) => {
    const previous = migrated[index - 1];
    const isOldMiraReply =
      message.role === "assistant" &&
      previous?.role === "user" &&
      (
        message.text.startsWith("I hear you. Let us make this") ||
        message.text.startsWith("Let us come back to what is here") ||
        message.text.startsWith("Here is a steady way") ||
        message.text.startsWith("Here is one shaped by") ||
        message.text.includes("I am listening. The part that stands out")
      );

    return isOldMiraReply ? { ...message, text: createChatReply(previous.text) } : message;
  });

  if (JSON.stringify(migrated) !== JSON.stringify(messages)) {
    writeJSON(storageKeys.chat, migrated);
  }

  return migrated;
}

function renderChat() {
  const messages = readChat();
  elements.chatLog.innerHTML = "";
  messages.forEach((message) => {
    const bubble = document.createElement("article");
    bubble.className = `chat-message ${message.role}`;
    bubble.innerHTML = `
      <span>${message.role === "assistant" ? "Mira" : message.voice ? "Your voice note" : "You"}</span>
      <p>${escapeHTML(message.text)}</p>
    `;
    elements.chatLog.append(bubble);
  });
  elements.chatLog.scrollTop = elements.chatLog.scrollHeight;
  elements.chatProfileNote.textContent = `${getProfile().label} style: ${getProfile().summary}`;
}

function setMiraTyping(isTyping) {
  document.querySelector("#miraTyping")?.remove();
  if (!isTyping) return;

  const bubble = document.createElement("article");
  bubble.className = "chat-message assistant typing";
  bubble.id = "miraTyping";
  bubble.innerHTML = `
    <span>Mira</span>
    <p><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></p>
  `;
  elements.chatLog.append(bubble);
  elements.chatLog.scrollTop = elements.chatLog.scrollHeight;
}

function saveChat(messages) {
  writeJSON(storageKeys.chat, messages.slice(-24));
  renderChat();
  checkBadges();
}

function addChatMessage(role, text, options = {}) {
  if (role === "assistant") setMiraTyping(false);
  const messages = readChat();
  messages.push({
    id: createId(),
    role,
    text,
    voice: Boolean(options.voice),
    createdAt: new Date().toISOString()
  });
  saveChat(messages);
}

function queueMiraReply(text) {
  setMiraTyping(true);
  const delay = Math.min(1500, Math.max(650, text.length * 16));
  setTimeout(() => addChatMessage("assistant", createChatReply(text)), delay);
}

function latestAssistantText() {
  const messages = readChat();
  return [...messages].reverse().find((message) => message.role === "assistant")?.text || "";
}

function warmSpeechVoices() {
  if (!("speechSynthesis" in window)) return;
  availableSpeechVoices = speechSynthesis.getVoices();
  populateVoiceOptions();
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = warmSpeechVoices;
}

function isLikelyNaturalVoice(voice) {
  return /(premium|enhanced|natural|neural|online)/i.test(voice.name);
}

function isLikelyNoveltyVoice(voice) {
  return /(compact|basic|legacy|robot|fred|zarvox|trinoids|boing|bubbles|good news|bad news|bahh|bells|cellos|jester|organ|superstar|whisper)/i.test(voice.name);
}

function voiceScore(voice, profile) {
  const name = voice.name.toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = lang.startsWith("en") ? 8 : 0;

  profile.preferredNames.forEach((preferred, index) => {
    if (name.includes(preferred.toLowerCase())) score += 90 - index * 5;
  });

  if (profile.gender === "male") {
    if (/(male|man|daniel|alex|david|mark|george|aaron|oliver|arthur|thomas)/i.test(voice.name)) score += 24;
    if (/(female|woman|samantha|victoria|zira|karen|moira|tessa|serena|hazel|ava|allison|susan)/i.test(voice.name)) score -= 32;
  } else {
    if (/(female|woman|samantha|victoria|zira|karen|moira|tessa|serena|hazel|ava|allison|susan)/i.test(voice.name)) score += 24;
    if (/(male|man|daniel|alex|david|mark|george|aaron|oliver|arthur|thomas)/i.test(voice.name)) score -= 32;
  }

  if (isLikelyNaturalVoice(voice)) score += 90;
  if (isLikelyNoveltyVoice(voice)) score -= 90;
  if (voice.localService) score += 6;
  return score;
}

function voiceOptionValue(voice) {
  return `voice:${voice.voiceURI || voice.name}`;
}

function installedVoiceLabel(voice) {
  const quality = isLikelyNaturalVoice(voice) ? "natural" : "installed";
  const language = voice.lang ? `, ${voice.lang}` : "";
  return `${voice.name} (${quality}${language})`;
}

function selectedInstalledVoice(value) {
  if (!value?.startsWith("voice:")) return null;
  const voiceId = value.replace(/^voice:/, "");
  return availableSpeechVoices.find((voice) => (voice.voiceURI || voice.name) === voiceId) || null;
}

function profileForVoiceChoice(value, fallback = "luna") {
  return voiceProfiles[value] || voiceProfiles[fallback] || voiceProfiles.luna;
}

function topVoices(profile, limit = 8) {
  return [...availableSpeechVoices]
    .filter((voice) => (voice.lang || "").toLowerCase().startsWith("en"))
    .filter((voice) => !isLikelyNoveltyVoice(voice))
    .map((voice) => ({ voice, score: voiceScore(voice, profile) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.voice);
}

function populateVoiceSelect(select, preferredProfileKey) {
  if (!select || !availableSpeechVoices.length) return;
  const currentValue = select.value;
  const baseOptions = Array.from(select.querySelectorAll("option"))
    .filter((option) => !option.value.startsWith("voice:"))
    .map((option) => ({ value: option.value, text: option.textContent }));

  select.innerHTML = "";
  baseOptions.forEach((option) => {
    select.append(new Option(option.text, option.value));
  });

  const profile = voiceProfiles[preferredProfileKey] || voiceProfiles.luna;
  topVoices(profile).forEach((voice) => {
    select.append(new Option(installedVoiceLabel(voice), voiceOptionValue(voice)));
  });

  if (Array.from(select.options).some((option) => option.value === currentValue)) {
    select.value = currentValue;
  } else {
    select.value = "auto";
  }
}

function populateVoiceOptions() {
  populateVoiceSelect(elements.affirmationVoiceSelect, "luna");
  populateVoiceSelect(elements.voiceSelect, "luna");
  updateVoiceQualityNote();
}

function updateVoiceQualityNote() {
  if (!elements.audioVoiceQuality) return;
  if (!("speechSynthesis" in window)) {
    elements.audioVoiceQuality.textContent = "Voice playback is not supported in this browser.";
    return;
  }

  if (!availableSpeechVoices.length) {
    elements.audioVoiceQuality.textContent = "Loading installed voices...";
    return;
  }

  const naturalCount = availableSpeechVoices.filter(isLikelyNaturalVoice).length;
  if (naturalCount > 0) {
    elements.audioVoiceQuality.textContent = "A natural/enhanced voice is available on this device. Choose it for the most human sound.";
  } else {
    elements.audioVoiceQuality.textContent = "This device is only showing standard browser voices. For truly human audio, install enhanced system voices or connect an AI voice service.";
  }
}

function findSpeechVoice(profile, selectedValue = "auto") {
  const explicitVoice = selectedInstalledVoice(selectedValue);
  if (explicitVoice) return explicitVoice;

  const voices = availableSpeechVoices.length ? availableSpeechVoices : speechSynthesis.getVoices();
  if (!voices.length) return null;
  return voices
    .filter((voice) => !isLikelyNoveltyVoice(voice))
    .map((voice) => ({ voice, score: voiceScore(voice, profile) }))
    .sort((a, b) => b.score - a.score)[0].voice;
}

function splitSpeechText(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/([.!?])\s+/g, "$1|")
    .replace(/([,;:])\s+/g, "$1|")
    .split("|")
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function naturalSpeechValues(profile, index) {
  const variation = [-0.01, 0.004, -0.006, 0.008][index % 4];
  return {
    rate: Math.max(0.74, profile.rate + variation),
    pitch: Math.min(1.04, Math.max(0.86, profile.pitch + variation / 4)),
    volume: voiceVolumeLevel()
  };
}

function humanPauseMs(segment, options = {}) {
  const requestedBase = options.pauseMs;
  const base = requestedBase ?? (/[.!?]$/.test(segment) ? 760 : 520);
  const breathPause = /(breath|breathe|eyes close|soften|settle|ready|again|one last time)/i.test(segment) ? 520 : 0;
  const lengthPause = segment.length > 95 ? 260 : 0;
  return base + breathPause + lengthPause;
}

function stopSpokenAudio() {
  activeSpeechToken += 1;
  clearTimeout(activeSpeechTimeout);
  activeSpeechTimeout = null;
  activeSpeechMode = "";
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}

function speakTextWithHumanPacing(text, profile, options = {}) {
  if (!("speechSynthesis" in window)) {
    showToast("Voice playback is not supported here.");
    options.onUnsupported?.();
    return;
  }

  const segments = Array.isArray(text)
    ? text.flatMap((line) => splitSpeechText(String(line)))
    : splitSpeechText(text);
  if (!segments.length) return;

  stopSpokenAudio();
  const token = activeSpeechToken;
  const matchedVoice = findSpeechVoice(profile, options.voiceValue || "auto");
  let index = 0;
  activeSpeechMode = options.mode || "voice";
  options.onStart?.(matchedVoice);

  const speakNext = () => {
    if (token !== activeSpeechToken) return;
    if (index >= segments.length) {
      activeSpeechMode = "";
      options.onFinish?.();
      return;
    }

    const segment = segments[index];
    const settings = naturalSpeechValues(profile, index);
    const utterance = new SpeechSynthesisUtterance(segment);
    if (matchedVoice) utterance.voice = matchedVoice;
    utterance.rate = options.rate ?? settings.rate;
    utterance.pitch = options.pitch ?? settings.pitch;
    utterance.volume = options.volume ?? settings.volume;
    utterance.onstart = () => options.onSegment?.(segment, index);
    utterance.onend = () => {
      if (token !== activeSpeechToken) return;
      const pause = humanPauseMs(segment, options);
      index += 1;
      activeSpeechTimeout = setTimeout(speakNext, pause);
    };
    utterance.onerror = () => {
      if (token !== activeSpeechToken) return;
      index += 1;
      activeSpeechTimeout = setTimeout(speakNext, 260);
    };
    speechSynthesis.speak(utterance);
  };

  speakNext();
}

function speakLatestReply() {
  if (!("speechSynthesis" in window)) {
    showToast("Voice playback is not supported here.");
    return;
  }

  const text = latestAssistantText();
  if (!text) {
    showToast("No Mira reply to play yet.");
    return;
  }

  const selectedValue = elements.voiceSelect.value;
  const profile = profileForVoiceChoice(selectedValue, "luna");
  speakTextWithHumanPacing(text, profile, {
    mode: "mira",
    voiceValue: selectedValue,
    onStart: (matchedVoice) => {
      const voiceNote = matchedVoice ? ` using ${matchedVoice.name}` : "";
      elements.voiceStatus.textContent = `${profile.name} is reading Mira's reply softly${voiceNote}.`;
    },
    onFinish: () => {
      elements.voiceStatus.textContent = "Voice notes stay in this local prototype.";
    }
  });
}

function createAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!audioContext) audioContext = new AudioCtor();
  return audioContext;
}

function trackSoundNode(node, collection = soundscapeNodes) {
  collection.push(node);
  return node;
}

function stopTrackedNodes(nodes) {
  while (nodes.length) {
    const node = nodes.pop();
    try {
      node.stop?.();
    } catch {
      // Some Web Audio nodes cannot be stopped; disconnecting is enough.
    }
    try {
      node.disconnect?.();
    } catch {
      // Already disconnected.
    }
  }
}

function stopSoundscape() {
  stopTrackedNodes(soundscapeNodes);
  soundscapeMasterGain = null;
}

function createNoiseBuffer(ctx, seconds = 2) {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let index = 0; index < data.length; index += 1) {
    last = last * 0.78 + (Math.random() * 2 - 1) * 0.22;
    data[index] = last;
  }
  return buffer;
}

function voiceVolumeLevel() {
  const value = Number(elements.voiceVolume?.value || 100);
  return Math.min(1, Math.max(0.3, value / 100));
}

function natureVolumeLevel() {
  const value = Number(elements.natureVolume?.value || 80);
  return Math.min(1, Math.max(0, value / 100));
}

function updateVoiceVolumeLabel() {
  if (!elements.voiceVolumeLabel || !elements.voiceVolume) return;
  elements.voiceVolumeLabel.textContent = `${elements.voiceVolume.value}%`;
}

function updateNatureVolumeLabel() {
  if (!elements.natureVolumeLabel || !elements.natureVolume) return;
  elements.natureVolumeLabel.textContent = `${elements.natureVolume.value}%`;
}

function updateAudioVolumeLabels() {
  updateVoiceVolumeLabel();
  updateNatureVolumeLabel();
}

function setLiveNatureVolume() {
  if (!soundscapeMasterGain) return;
  soundscapeMasterGain.gain.setTargetAtTime(natureVolumeLevel(), audioContext?.currentTime || 0, 0.04);
}

function addMovementLfo(ctx, targetGain, frequency, depth) {
  const lfo = trackSoundNode(ctx.createOscillator());
  const lfoGain = trackSoundNode(ctx.createGain());
  lfo.frequency.value = frequency;
  lfoGain.gain.value = depth;
  lfo.connect(lfoGain);
  lfoGain.connect(targetGain.gain);
  lfo.start();
}

function addGentleTone(ctx, master, frequency, gainValue, movementFrequency = 0.12, movementDepth = gainValue * 0.6) {
  const tone = trackSoundNode(ctx.createOscillator());
  const toneGain = trackSoundNode(ctx.createGain());
  tone.type = "sine";
  tone.frequency.value = frequency;
  toneGain.gain.value = gainValue;
  tone.connect(toneGain);
  toneGain.connect(master);
  addMovementLfo(ctx, toneGain, movementFrequency, movementDepth);
  tone.start();
}

function addBirdLayer(ctx, master, baseFrequency = 1680, gainValue = 0.012) {
  [baseFrequency, baseFrequency + 520, baseFrequency + 840].forEach((frequency, index) => {
    addGentleTone(ctx, master, frequency, gainValue * (index === 0 ? 1 : 0.72), 0.18 + index * 0.07, gainValue * 0.82);
  });
}

function startNatureLayer(ctx, kind, volume = natureVolumeLevel()) {
  const source = trackSoundNode(ctx.createBufferSource());
  const filter = trackSoundNode(ctx.createBiquadFilter());
  const gain = trackSoundNode(ctx.createGain());
  const master = trackSoundNode(ctx.createGain());
  source.buffer = createNoiseBuffer(ctx, 3);
  source.loop = true;

  const presets = {
    forest: { type: "bandpass", frequency: 980, q: 0.85, gain: 0.14 },
    forestBirds: { type: "bandpass", frequency: 1450, q: 1.05, gain: 0.085 },
    ocean: { type: "lowpass", frequency: 720, q: 0.42, gain: 0.16 },
    night: { type: "bandpass", frequency: 1650, q: 1.2, gain: 0.11 },
    wind: { type: "lowpass", frequency: 520, q: 0.55, gain: 0.13 },
    creek: { type: "bandpass", frequency: 1380, q: 1.35, gain: 0.15 },
    waterfall: { type: "lowpass", frequency: 1220, q: 0.34, gain: 0.16 },
    meadow: { type: "bandpass", frequency: 2200, q: 1.55, gain: 0.1 },
    thunder: { type: "lowpass", frequency: 380, q: 0.3, gain: 0.15 },
    lake: { type: "lowpass", frequency: 660, q: 0.4, gain: 0.14 },
    leaves: { type: "bandpass", frequency: 820, q: 0.9, gain: 0.13 }
  };
  const preset = presets[kind] || presets.forest;
  filter.type = preset.type;
  filter.frequency.value = preset.frequency;
  filter.Q.value = preset.q;
  gain.gain.value = preset.gain;
  master.gain.value = volume;
  soundscapeMasterGain = master;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(master);
  master.connect(ctx.destination);
  source.start();

  if (["forest", "ocean", "wind", "lake", "leaves", "waterfall", "thunder", "creek", "forestBirds"].includes(kind)) {
    const movement = {
      forest: [0.17, 0.036],
      forestBirds: [0.2, 0.028],
      ocean: [0.12, 0.06],
      wind: [0.18, 0.048],
      lake: [0.16, 0.046],
      leaves: [0.24, 0.045],
      waterfall: [0.08, 0.03],
      thunder: [0.035, 0.052],
      creek: [0.28, 0.045]
    }[kind];
    addMovementLfo(ctx, gain, movement[0], movement[1]);
  }

  if (kind === "forestBirds") {
    addBirdLayer(ctx, master, 1500, 0.014);
  }

  if (kind === "meadow") {
    addBirdLayer(ctx, master, 1760, 0.012);
    addGentleTone(ctx, master, 980, 0.006, 0.11, 0.004);
  }

  if (kind === "night") {
    addGentleTone(ctx, master, 1320, 0.008, 0.11, 0.005);
    addGentleTone(ctx, master, 1760, 0.006, 0.16, 0.004);
  }

  if (kind === "creek") {
    addGentleTone(ctx, master, 640, 0.008, 0.34, 0.006);
    addGentleTone(ctx, master, 980, 0.006, 0.42, 0.004);
  }

  if (kind === "lake" || kind === "ocean") {
    addGentleTone(ctx, master, kind === "ocean" ? 160 : 220, 0.01, 0.08, 0.007);
  }

  if (kind === "leaves" || kind === "wind") {
    addGentleTone(ctx, master, 420, 0.006, 0.2, 0.004);
  }

  if (kind === "thunder") {
    const rumble = trackSoundNode(ctx.createOscillator());
    const rumbleGain = trackSoundNode(ctx.createGain());
    const rumbleLfo = trackSoundNode(ctx.createOscillator());
    const rumbleDepth = trackSoundNode(ctx.createGain());
    rumble.type = "sine";
    rumble.frequency.value = 58;
    rumbleGain.gain.value = 0.018;
    rumbleLfo.frequency.value = 0.018;
    rumbleDepth.gain.value = 0.025;
    rumbleLfo.connect(rumbleDepth);
    rumbleDepth.connect(rumbleGain.gain);
    rumble.connect(rumbleGain);
    rumbleGain.connect(master);
    rumbleLfo.start();
    rumble.start();
  }
}

function startSoundscape(kind, volume = natureVolumeLevel()) {
  const ctx = createAudioContext();
  if (!ctx) return false;
  stopSoundscape();
  ctx.resume?.();
  startNatureLayer(ctx, kind, volume);
  return true;
}

function previewNatureSound() {
  if (isAudioAffirmationPlaying) {
    showToast("Nature sound is already playing with your affirmation.");
    return;
  }

  const hasSoundscape = startSoundscape(elements.ambienceSelect.value, natureVolumeLevel());
  if (!hasSoundscape) {
    showToast("Nature sound is not supported in this browser.");
    return;
  }

  elements.affirmationAudioStatus.textContent = "Previewing nature sound. Adjust the volume if you want it louder or softer.";
  clearTimeout(naturePreviewTimer);
  naturePreviewTimer = setTimeout(() => {
    if (!isAudioAffirmationPlaying) {
      stopSoundscape();
      elements.affirmationAudioStatus.textContent = "Nature preview finished. Press start when you want the guided affirmation.";
    }
  }, 4500);
}

function buildDailyAudioAffirmationScript() {
  const profile = getProfile();
  const affirmation = currentAffirmation || profile.sample;
  return [
    "Find a position that feels supported.",
    "Let your eyes close, or soften your gaze.",
    "Take a slow breath in.",
    "And let the breath leave without rushing.",
    `Today's affirmation is: ${affirmation}`,
    "Let those words arrive gently, without needing to force yourself to believe them all at once.",
    `Again, softly: ${affirmation}`,
    "Notice where your body can loosen by just one percent.",
    "You do not have to solve the whole day from here.",
    "You only need one steady breath, and one kind next step.",
    `One last time: ${affirmation}`,
    "When you are ready, carry this steadiness with you."
  ];
}

function updateAudioControlState() {
  elements.startAudioAffirmationButton.disabled = isAudioAffirmationPlaying && !isAudioAffirmationPaused;
  elements.pauseAudioAffirmationButton.disabled = !isAudioAffirmationPlaying;
  elements.pauseAudioAffirmationButton.textContent = isAudioAffirmationPaused ? "Resume" : "Pause";
  elements.stopAudioAffirmationButton.disabled = !isAudioAffirmationPlaying;
}

function saveAudioSession(voiceKey, ambience) {
  const sessions = readJSON(storageKeys.audioSessions, []);
  writeJSON(storageKeys.audioSessions, [
    {
      id: createId(),
      voice: voiceKey,
      ambience,
      profile: getProfile().label,
      createdAt: new Date().toISOString()
    },
    ...sessions
  ].slice(0, 30));
  checkBadges();
}

function finishDailyAudioAffirmation() {
  isAudioAffirmationPlaying = false;
  isAudioAffirmationPaused = false;
  stopSoundscape();
  updateAudioControlState();
  elements.affirmationAudioStatus.textContent = "Session complete. You can start another one whenever you need it.";
}

function startDailyAudioAffirmation() {
  if (!("speechSynthesis" in window)) {
    showToast("Voice playback is not supported here.");
    return;
  }

  const voiceKey = elements.affirmationVoiceSelect.value;
  const profile = profileForVoiceChoice(voiceKey, "luna");
  const ambience = elements.ambienceSelect.value;
  const hasSoundscape = startSoundscape(ambience);
  audioAffirmationLines = buildDailyAudioAffirmationScript();
  audioAffirmationIndex = 0;
  isAudioAffirmationPlaying = true;
  isAudioAffirmationPaused = false;
  saveAudioSession(voiceKey, ambience);
  updateAudioControlState();

  speakTextWithHumanPacing(audioAffirmationLines, profile, {
    mode: "daily-audio",
    voiceValue: voiceKey,
    pauseMs: 1120,
    onStart: (matchedVoice) => {
      const voiceNote = matchedVoice ? ` Voice: ${matchedVoice.name}.` : "";
      const backgroundNote = hasSoundscape ? " Nature sound is playing softly behind the voice." : "";
      elements.affirmationAudioStatus.textContent = `${profile.name} is guiding your affirmation.${voiceNote}${backgroundNote}`;
    },
    onSegment: (_, index) => {
      audioAffirmationIndex = index;
    },
    onFinish: finishDailyAudioAffirmation
  });
}

function pauseDailyAudioAffirmation() {
  if (!isAudioAffirmationPlaying) return;

  if (isAudioAffirmationPaused) {
    speechSynthesis.resume();
    audioContext?.resume?.();
    isAudioAffirmationPaused = false;
    elements.affirmationAudioStatus.textContent = "Resuming your guided affirmation.";
  } else {
    speechSynthesis.pause();
    audioContext?.suspend?.();
    isAudioAffirmationPaused = true;
    elements.affirmationAudioStatus.textContent = "Paused. Press resume when you are ready.";
  }

  updateAudioControlState();
}

function stopDailyAudioAffirmation() {
  stopSpokenAudio();
  stopSoundscape();
  isAudioAffirmationPlaying = false;
  isAudioAffirmationPaused = false;
  audioAffirmationLines = [];
  audioAffirmationIndex = 0;
  updateAudioControlState();
  elements.affirmationAudioStatus.textContent = "Stopped. Press start when you want to listen again.";
}

function startVoiceMessage() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    const stamp = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    addChatMessage("user", `[Voice note recorded at ${stamp}] I want to talk this through.`, { voice: true });
    queueMiraReply("I want to talk this through.");
    elements.voiceStatus.textContent = "Voice recording is not supported in this browser, so I added a voice-note placeholder.";
    return;
  }

  if (isRecordingVoice && recognition) {
    recognition.stop();
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;
  isRecordingVoice = true;
  elements.voiceMessageButton.textContent = "Stop";
  elements.voiceStatus.textContent = "Listening... speak naturally.";

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(" ")
      .trim();
    if (!transcript) return;
    addChatMessage("user", transcript, { voice: true });
    queueMiraReply(transcript);
  };

  recognition.onerror = () => {
    elements.voiceStatus.textContent = "I could not hear that clearly. You can try again or type it.";
  };

  recognition.onend = () => {
    isRecordingVoice = false;
    elements.voiceMessageButton.textContent = "Voice";
    elements.voiceStatus.textContent = "Voice notes stay in this local prototype.";
  };

  recognition.start();
}

function startMeditation(key) {
  const meditation = meditations[key];
  if (!meditation) return;
  const history = readJSON(storageKeys.meditations, []);
  writeJSON(storageKeys.meditations, [
    { id: createId(), key, title: meditation.title, minutes: meditation.minutes, createdAt: new Date().toISOString() },
    ...history
  ].slice(0, 30));
  addChatMessage("assistant", `${meditation.title}: ${meditation.script}`);
  elements.voiceStatus.textContent = `${meditation.title} is ready. Press Play reply if you want it read aloud.`;
  checkBadges();
}

function detectNeed(message) {
  const text = message.toLowerCase();
  if (/(great day|good day|beautiful day|happy|relaxed|relxed|calm|peaceful|proud|excited|grateful|better|okay today|doing well)/.test(text)) return "positive";
  if (/(panic|anxious|anxiety|overwhelm|stressed|stress|too much)/.test(text)) return "overwhelmed";
  if (/(sad|lonely|alone|heartbroken|grief|hurt|cry)/.test(text)) return "tender";
  if (/(worth|enough|failure|hate myself|self|confidence|love)/.test(text)) return "worth";
  if (/(decision|choose|change|boundary|speak|afraid|scared)/.test(text)) return "courage";
  if (/(step|motivation|stuck|procrastinate|goal|focus)/.test(text)) return "momentum";
  if (/(affirmation|mantra|sentence)/.test(text)) return "affirmation";
  return "general";
}

function firstName() {
  return getAccount()?.name?.split(" ")[0] || "";
}

function messageSnippet(message) {
  const cleaned = message.replace(/\s+/g, " ").trim();
  if (cleaned.length <= 92) return cleaned;
  return `${cleaned.slice(0, 89).trim()}...`;
}

function humanReflection(need, message) {
  const name = firstName();
  const address = name ? `${name}, ` : "";
  const snippet = messageSnippet(message);
  const reflections = {
    overwhelmed: `${address}that sounds like too much to hold all at once. I do not want to minimize it or throw a quick fix at you.`,
    tender: `${address}there is a real ache in what you wrote. It makes sense that you would want this to be met gently.`,
    worth: `${address}I hear how personal this feels. When the mind starts turning pain into a verdict about who you are, that can feel so lonely.`,
    courage: `${address}it sounds like there is something honest in you trying to come forward, even if part of you is scared of what happens next.`,
    momentum: `${address}I hear that you want movement, but not the kind that shames you into action. That matters.`,
    affirmation: `${address}yes. Let us make the affirmation feel like it belongs to this moment, not like a quote pasted on top of it.`,
    positive: `${address}I love that there is some ease here. I do not want to turn a good moment into homework.`,
    general: `${address}I am listening. The part that stands out to me is: "${snippet}" That feels worth slowing down with.`
  };
  return reflections[need];
}

function createChatReply(message) {
  const need = detectNeed(message);
  const profile = getProfile();
  const affirmation = profile.affirmations[Math.abs(message.length + dateSeed()) % profile.affirmations.length];
  const reflection = humanReflection(need, message);
  const toneBridge = {
    gentle: "I can stay with you here for a minute. No performance, no pretending.",
    grounded: "Let us keep this close to the ground: what happened, what it stirred up, and what your body needs next.",
    clear: "I will be honest and kind with you: this deserves care, not self-attack."
  };

  const replies = {
    overwhelmed: `${reflection} ${toneBridge[chatTone]} For right now, could we shrink the problem down to the next ten minutes? One steady sentence for this moment: ${affirmation} What is the smallest thing that would make your body feel 1 percent safer?`,
    tender: `${reflection} ${toneBridge[chatTone]} You do not have to talk yourself out of the feeling before you are allowed to be cared for. If you want, tell me the part that hurts the most, even if it comes out messy.`,
    worth: `${reflection} ${toneBridge[chatTone]} I do not believe this moment gets to define your worth. Try holding this sentence gently: ${affirmation} What would you say to someone you loved if they felt this way?`,
    courage: `${reflection} ${toneBridge[chatTone]} You can be kind and still be clear. Before deciding what to do, write the honest sentence only for yourself. What do you wish you could say without softening it?`,
    momentum: `${reflection} ${toneBridge[chatTone]} Let us choose something so small it does not require a whole new personality. What is one step under five minutes that would count, even quietly?`,
    affirmation: `${reflection} Here is one shaped by your ${profile.label.toLowerCase()} style: ${affirmation} If that does not land, tell me whether you need it softer, braver, or more direct.`,
    positive: `${reflection} Let us let this count. Take a second to notice what helped you feel relaxed and happy today, because that is useful information about what supports you. If you want, tell me one detail from the day you want to remember.`,
    general: `${reflection} ${toneBridge[chatTone]} I am not going to rush past it. Do you want comfort right now, help naming the feeling, or one clear next step?`
  };

  if (/(harm myself|suicide|kill myself|end my life|not safe)/i.test(message)) {
    return "I am really sorry this is here right now. I am going to be very direct because your safety matters: please contact emergency services or a crisis line now, and if there is someone nearby you trust, reach out to them so you are not alone with this. You deserve real human support in this moment.";
  }

  return replies[need];
}

function saveChatInsight() {
  const messages = readChat();
  const lastAssistant = [...messages].reverse().find((message) => message.role === "assistant");
  if (!lastAssistant) {
    showToast("No chat insight to save yet.");
    return;
  }

  saveEntry({
    mood: "supported",
    prompt: "Saved from AI chat",
    text: lastAssistant.text
  });
  showToast("Chat insight saved to journal.");
}

function renderPricing() {
  const selectedPlan = localStorage.getItem(storageKeys.plan);
  document.querySelectorAll(".price-card").forEach((card) => {
    const isSelected = card.dataset.plan === selectedPlan;
    card.classList.toggle("selected", isSelected);
    const button = card.querySelector("button");
    button.textContent = isSelected ? "Selected" : "Start trial";
  });
}

function renderAffirmationLibrary() {
  const saved = readJSON(storageKeys.saved, []);
  elements.affirmationLibrary.innerHTML = "";
  elements.libraryCount.textContent = `${saved.length} saved`;

  if (!saved.length) {
    elements.affirmationLibrary.innerHTML = '<p class="empty-state">Saved affirmations will collect here.</p>';
    return;
  }

  saved.slice(0, 6).forEach((affirmation) => {
    const item = document.createElement("article");
    item.className = "library-item";
    item.innerHTML = `
      <strong>${escapeHTML(affirmation.profile)}</strong>
      <p>${escapeHTML(affirmation.text)}</p>
    `;
    elements.affirmationLibrary.append(item);
  });
}

function updateGroundingCount() {
  const checked = elements.groundingList.querySelectorAll("input:checked").length;
  elements.groundingCount.textContent = `${checked} of 5`;
}

function updateCareCount() {
  const selected = elements.careOptions.querySelectorAll(".care-option.active").length;
  elements.careCount.textContent = selected === 1 ? "1 selected" : `${selected} selected`;
}

function selectedCareItems() {
  return [...elements.careOptions.querySelectorAll(".care-option.active")].map((item) => item.dataset.care);
}

function selectedGroundingItems() {
  return [...elements.groundingList.querySelectorAll("input:checked")].map((item) => item.value);
}

function renderSupportList() {
  const moments = readJSON(storageKeys.support, []);
  elements.supportList.innerHTML = "";

  if (!moments.length) {
    elements.supportList.innerHTML = '<p class="empty-state">Saved support moments will appear here.</p>';
    elements.supportLastSaved.textContent = "No moments yet";
    return;
  }

  elements.supportLastSaved.textContent = new Date(moments[0].createdAt).toLocaleDateString([], {
    month: "short",
    day: "numeric"
  });

  moments.slice(0, 5).forEach((moment) => {
    const grounding = moment.grounding.length ? `Grounding: ${moment.grounding.join(", ")}` : "Grounding: none";
    const care = moment.care.length ? `Care: ${moment.care.join(", ")}` : "Care: none";
    const item = document.createElement("article");
    item.className = "entry-item";
    item.innerHTML = `
      <div class="entry-meta">
        <span>${new Date(moment.createdAt).toLocaleDateString([], { month: "short", day: "numeric" })}</span>
        <span>${moment.breathing}</span>
      </div>
      <strong>${escapeHTML(care)}</strong>
      <p>${escapeHTML(grounding)}</p>
      ${moment.note ? `<p>${escapeHTML(moment.note)}</p>` : ""}
    `;
    elements.supportList.append(item);
  });
}

function saveSupportMoment() {
  const moments = readJSON(storageKeys.support, []);
  const moment = {
    id: createId(),
    breathing: elements.breathPhase.textContent === "Ready" ? "Breathing: ready" : `Breathing: ${elements.breathPhase.textContent}`,
    grounding: selectedGroundingItems(),
    care: selectedCareItems(),
    note: elements.supportNote.value.trim(),
    createdAt: new Date().toISOString()
  };

  writeJSON(storageKeys.support, [moment, ...moments].slice(0, 30));
  renderSupportList();
  updateMetrics();
  showToast("Support moment saved.");
}

function renderBreathStep() {
  const step = breathSequence[breathStep];
  elements.breathPhase.textContent = step.phase;
  elements.breathCount.textContent = breathRemaining;
  elements.breathOrb.classList.remove("expand", "hold", "release");
  if (step.className) elements.breathOrb.classList.add(step.className);
}

function startBreathing() {
  if (breathTimer) {
    clearInterval(breathTimer);
    breathTimer = null;
    elements.breathButton.textContent = "Resume";
    return;
  }

  elements.breathButton.textContent = "Pause";
  renderBreathStep();
  breathTimer = setInterval(() => {
    breathRemaining -= 1;
    if (breathRemaining <= 0) {
      breathStep = (breathStep + 1) % breathSequence.length;
      breathRemaining = breathSequence[breathStep].seconds;
    }
    renderBreathStep();
  }, 1000);
}

function resetBreathing() {
  clearInterval(breathTimer);
  breathTimer = null;
  breathStep = 0;
  breathRemaining = breathSequence[0].seconds;
  elements.breathButton.textContent = "Begin";
  elements.breathPhase.textContent = "Ready";
  elements.breathCount.textContent = breathRemaining;
  elements.breathOrb.classList.remove("expand", "hold", "release");
}

function fillPrompts() {
  elements.journalPrompt.innerHTML = prompts.map((prompt) => `<option>${prompt}</option>`).join("");
}

elements.navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.viewTarget) showView(button.dataset.viewTarget);
  });
});

elements.moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMood = button.dataset.mood;
    elements.moodButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

elements.newAffirmationButton.addEventListener("click", () => {
  pickDailyAffirmation(Math.floor(Math.random() * 20) + 1);
});

elements.refreshAudioAffirmationButton.addEventListener("click", () => {
  pickDailyAffirmation(Math.floor(Math.random() * 20) + 1);
  elements.affirmationAudioStatus.textContent = "A fresh guided affirmation is ready.";
});

elements.startAudioAffirmationButton.addEventListener("click", startDailyAudioAffirmation);
elements.pauseAudioAffirmationButton.addEventListener("click", pauseDailyAudioAffirmation);
elements.stopAudioAffirmationButton.addEventListener("click", stopDailyAudioAffirmation);
elements.affirmationVoiceSelect.addEventListener("change", updateVoiceQualityNote);
elements.voiceSelect.addEventListener("change", updateVoiceQualityNote);
elements.previewNatureButton.addEventListener("click", previewNatureSound);
elements.voiceVolume.addEventListener("input", updateVoiceVolumeLabel);
elements.natureVolume.addEventListener("input", () => {
  updateNatureVolumeLabel();
  if (soundscapeMasterGain) {
    setLiveNatureVolume();
  } else if (!isAudioAffirmationPlaying && soundscapeNodes.length) {
    startSoundscape(elements.ambienceSelect.value, natureVolumeLevel());
  }
});
elements.ambienceSelect.addEventListener("change", () => {
  if (!isAudioAffirmationPlaying && soundscapeNodes.length) {
    startSoundscape(elements.ambienceSelect.value, natureVolumeLevel());
  }
});

elements.saveAffirmationButton.addEventListener("click", () => {
  const saved = readJSON(storageKeys.saved, []);
  writeJSON(storageKeys.saved, [
    { text: currentAffirmation, profile: getProfile().label, savedAt: new Date().toISOString() },
    ...saved
  ].slice(0, 30));
  renderAffirmationLibrary();
  updateMetrics();
  showToast("Affirmation saved.");
});

elements.quickSaveButton.addEventListener("click", () => {
  if (!elements.quickThought.value.trim()) {
    showToast("Add a thought first.");
    return;
  }
  saveEntry({
    mood: currentMood,
    prompt: "Quick check-in",
    text: elements.quickThought.value
  });
  elements.quickThought.value = "";
  showToast("Check-in saved.");
});

document.querySelectorAll("[data-quick-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    elements.quickThought.value = `${button.dataset.quickPrompt} `;
    elements.quickThought.focus();
  });
});

document.querySelectorAll("[data-journal-insert]").forEach((button) => {
  button.addEventListener("click", () => {
    const starter = `${button.dataset.journalInsert} `;
    elements.journalText.value = elements.journalText.value
      ? `${elements.journalText.value.trim()}\n\n${starter}`
      : starter;
    elements.journalText.focus();
  });
});

document.querySelectorAll("[data-chat-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    elements.chatInput.value = button.dataset.chatPrompt;
    elements.chatInput.focus();
  });
});

elements.chatToneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chatTone = button.dataset.chatTone;
    elements.chatToneButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

elements.chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = elements.chatInput.value.trim();
  if (!text) {
    showToast("Add a message first.");
    return;
  }

  addChatMessage("user", text);
  elements.chatInput.value = "";
  queueMiraReply(text);
});

elements.clearChatButton.addEventListener("click", () => {
  writeJSON(storageKeys.chat, starterChatMessages());
  renderChat();
  showToast("Chat cleared.");
});

elements.saveChatInsightButton.addEventListener("click", saveChatInsight);

elements.voiceMessageButton.addEventListener("click", startVoiceMessage);

elements.playVoiceButton.addEventListener("click", speakLatestReply);

elements.stopVoiceButton.addEventListener("click", () => {
  stopSpokenAudio();
  elements.voiceStatus.textContent = "Voice playback stopped.";
});

elements.meditationButtons.forEach((button) => {
  button.addEventListener("click", () => startMeditation(button.dataset.meditation));
});

elements.enableNotificationsButton.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    showToast("Browser notifications are not supported here.");
    updateNotificationStatus();
    return;
  }

  const permission = await Notification.requestPermission();
  saveNotificationPrefs(permission === "granted");
  showToast(permission === "granted" ? "Browser notifications enabled." : "Notifications were not enabled.");
});

elements.testNotificationButton.addEventListener("click", () => {
  saveNotificationPrefs(true);
  sendReminderNotification("test");
});

elements.clearNotificationsButton.addEventListener("click", () => {
  writeJSON(storageKeys.notificationLog, []);
  renderNotificationLog();
  updateMetrics();
  showToast("Reminder history cleared.");
});

elements.themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.themeChoice);
    setSavedNotice(`${button.textContent} theme`);
    showToast(`${button.textContent} theme applied.`);
  });
});

elements.languageSelect.addEventListener("change", () => {
  applyLanguage(elements.languageSelect.value);
  setSavedNotice("Language saved");
  showToast("Language saved");
});

elements.settingsNotificationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveNotificationPrefsFromSettings(true);
  setSavedNotice("Notifications saved");
  showToast("Notification settings updated.");
});

[
  elements.settingsReminderTime,
  elements.settingsNotifyAffirmation,
  elements.settingsNotifyJournal,
  elements.settingsNotifyCare,
  elements.settingsQuietMode
].forEach((control) => {
  control.addEventListener("change", () => {
    saveNotificationPrefsFromSettings(getNotificationPrefs().enabled);
    setSavedNotice("Notifications saved");
  });
});

elements.paymentLast4.addEventListener("input", () => {
  elements.paymentLast4.value = elements.paymentLast4.value.replace(/\D/g, "").slice(0, 4);
});

elements.paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  savePaymentMethod();
});

elements.clearPaymentButton.addEventListener("click", clearPaymentMethod);

elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = elements.loginName.value.trim();
  const email = elements.loginEmail.value.trim();
  if (!name || !email) {
    showToast("Add your name and email to log in.");
    return;
  }

  writeJSON(storageKeys.account, {
    name,
    email,
    createdAt: getAccount()?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  renderAccount();
  checkBadges();
  showToast(`Welcome, ${name}.`);
});

elements.logoutButton.addEventListener("click", () => {
  localStorage.removeItem(storageKeys.account);
  elements.loginName.value = "";
  elements.loginEmail.value = "";
  renderAccount();
  checkBadges();
  showToast("Logged out.");
});

elements.journalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!elements.journalText.value.trim()) {
    showToast("Add an entry first.");
    return;
  }
  saveEntry({
    mood: elements.journalMood.value,
    prompt: elements.journalPrompt.value,
    text: elements.journalText.value
  });
  elements.journalText.value = "";
  showToast("Journal entry saved.");
});

elements.clearJournalButton.addEventListener("click", () => {
  elements.journalText.value = "";
  showToast("Draft cleared.");
});

elements.breathButton.addEventListener("click", startBreathing);

elements.breathResetButton.addEventListener("click", resetBreathing);

elements.groundingList.addEventListener("change", updateGroundingCount);

elements.careOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".care-option");
  if (!option) return;
  option.classList.toggle("active");
  updateCareCount();
});

elements.copySupportNoteButton.addEventListener("click", async () => {
  if (!elements.supportNote.value.trim()) {
    showToast("Add a message first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(elements.supportNote.value);
    showToast("Support note copied.");
  } catch {
    elements.supportNote.select();
    showToast("Support note selected.");
  }
});

elements.saveSupportButton.addEventListener("click", saveSupportMoment);

elements.quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profileKey = scoreQuiz(new FormData(elements.quizForm));
  localStorage.setItem(storageKeys.profile, profileKey);
  renderQuizResult(profileKey);
  pickDailyAffirmation();
  checkBadges();
  showToast("Your affirmation match is ready.");
});

elements.resetQuizButton.addEventListener("click", () => {
  elements.quizForm.reset();
  elements.quizResult.hidden = true;
  localStorage.removeItem(storageKeys.profile);
  pickDailyAffirmation();
  checkBadges();
  showToast("Quiz reset.");
});

elements.pricingGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".price-card");
  if (!button || !card) return;

  localStorage.setItem(storageKeys.plan, card.dataset.plan);
  renderPricing();
  updateMetrics();
  showToast(`${plans[card.dataset.plan].name} plan selected. Trial starts today.`);
});

fillPrompts();
pickDailyAffirmation();
renderEntries();
renderChat();
renderAffirmationLibrary();
renderSupportList();
renderNotificationPrefs();
renderNotificationLog();
renderPricing();
applyTheme(localStorage.getItem(storageKeys.theme) || "light");
renderPaymentMethod();
renderAccount();
updateMetrics();
updateTrial();
warmSpeechVoices();
updateGroundingCount();
updateCareCount();
resetBreathing();
updateAudioControlState();
updateAudioVolumeLabels();
scheduleNotificationCheck();

const storedProfile = getProfileKey();
if (storedProfile !== "balanced") {
  renderQuizResult(storedProfile);
}

applyLanguage(localStorage.getItem(storageKeys.language) || "en");
startTranslationObserver();
