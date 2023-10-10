const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center p-8 md:p-12">
      <h3 className="text-5xl font-medium"> {title}</h3>
    </div>
  );
};

export default PageHeader;
