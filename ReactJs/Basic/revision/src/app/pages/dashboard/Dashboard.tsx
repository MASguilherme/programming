export const DashSpan = () => {
  return (
    <div>
      <span>Dash Button</span>
    </div>
  );
};

export const DashButton = () => {
  return (
    <button>
      <DashSpan />
    </button>
  );
};

export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashButton />
    </div>
  );
};
