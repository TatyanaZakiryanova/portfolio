const Contacts = () => {
  return (
    <div className="mx-auto mt-20 p-10 text-text-dark">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-center text-3xl">Контакты</h2>
          <div className="mt-10 flex flex-col gap-5 lg:flex-row">
            <div className="flex items-center justify-center gap-1">
              <img src="/assets/icons/mail-icon.svg" alt="E-mail" className="h-8 w-8" />
              <a href="mailto:taZakiryanova@mail.ru" target="_blank" rel="noopener noreferrer">
                taZakiryanova@mail.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img src="/assets/icons/tg-icon.svg" alt="Telegram" className="h-8 w-8" />
              <a href="https://t.me/l1cht3r" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
