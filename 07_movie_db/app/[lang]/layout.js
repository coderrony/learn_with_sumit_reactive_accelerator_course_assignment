function LangLayout({ modal, children }) {
  return (
    <div>
      <div id="modal-root-content"></div>
      {modal}
      {children}
    </div>
  );
}

export default LangLayout;
