const Contacts = () => {
  return (
    <div className="mx-auto mt-20 p-10 text-text-dark">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-center text-3xl">Контакты</h2>
          <div className="mt-10 flex flex-col gap-5 lg:flex-row">
            <div className="flex items-center justify-center gap-1">
              <img src="/assets/icons/phone-icon.svg" alt="Phone" className="h-8 w-8" />
              <div>+7 919 697 02 54</div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img src="/assets/icons/mail-icon.svg" alt="E-mail" className="h-10 w-10" />
              <div>taZakiryanova@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
