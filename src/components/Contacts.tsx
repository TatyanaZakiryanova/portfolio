const Contacts = () => {
  return (
    <div className="mx-auto mt-20 p-10 text-text-dark">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-center text-3xl">Контакты</h2>
          <div className="mt-10 flex flex-col gap-5 lg:flex-row">
            <div className="flex items-center justify-center gap-1">
              <svg className="h-8 w-8">
                <use href="assets/icons/sprite.svg#icon-mail"></use>
              </svg>
              <a
                href="mailto:zakiryanova.webdev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                zakiryanova.webdev@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-1">
              <svg className="h-8 w-8">
                <use href="assets/icons/sprite.svg#icon-tg"></use>
              </svg>
              <a href="https://t.me/wav3_01" target="_blank" rel="noopener noreferrer">
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
