export const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-5 py-10">{children}</div>
);

export const ContainerTitle = ({ children }) => (
  <div className="max-w-md mx-auto text-center p-5">{children}</div>
);

export const ContainerGrid = ({ children }) => (
  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {children}
  </ul>
);
