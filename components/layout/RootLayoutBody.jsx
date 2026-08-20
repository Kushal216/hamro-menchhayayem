import NavigationComponents from './NavigationComponents';

const RootLayoutBody = ({ children }) => {
  return (
    <div className="min-h-screen flex-1">
      <NavigationComponents>{children}</NavigationComponents>
    </div>
  );
};

export default RootLayoutBody;
