import NavigationComponents from './NavigationComponents';

const RootLayoutBody = ({ children }) => {
  return (
    <div className={`grid grid-cols-5 min-h-screen flex-1`}>
      <NavigationComponents>{children}</NavigationComponents>
    </div>
  );
};

export default RootLayoutBody;
