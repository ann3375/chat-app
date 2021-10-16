import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...rest }): JSX.Element | null => {
  const importedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect((): void => {
    setIsLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (
          await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../../../assets/images/${name}.svg`)
        ).default;
      } catch (err) {
        throw err;
      } finally {
        setIsLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!isLoading && importedIconRef.current) {
    const { current: ImportedIcon } = importedIconRef;

    return <ImportedIcon {...rest} />;
  }

  return null;
};
