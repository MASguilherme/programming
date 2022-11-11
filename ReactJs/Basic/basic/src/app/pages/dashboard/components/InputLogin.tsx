export const InputLogin = () => {
  return (
    <label>
      <span>E-mail:</span>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" ? inputPassword.current?.focus() : undefined
        }
      />
    </label>
  );
};
