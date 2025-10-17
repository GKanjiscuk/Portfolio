import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const AnimatedCode = () => {
  const [isError, setIsError] = useState(false);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[93vw] h-[80vh] overflow-hidden rounded-lg shadow-2xl bg-[#1e1e1e]/80 flex flex-col filter blur-sm">
          
          <div className="flex items-center p-2 bg-black/20 text-gray-400 text-sm">
            <div className="flex gap-2 mr-auto">
              <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
              <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
            </div>
            <span>Portfolio.java - meu-portfolio/src/main/java</span>
          </div>

          <div className={`flex-1 p-4 overflow-hidden font-mono text-lg transition-colors duration-300 ${isError ? 'text-red-400' : 'text-gray-400'}`}>
            <pre>
              <TypeAnimation
                sequence={[
                  'public class Portfolio {\n  private String name = "Giovanni Kanjiscuk";\n  private String role = "Desenvolvedor Fullstack"',
                  1000,
                  () => setIsError(true),
                  500,
                  'public class Portfolio {\n  private String name = "Giovanni Kanjiscuk";\n  private String role = "Desenvolvedor Fullstack";',
                  200,
                  () => setIsError(false),
                  'public class Portfolio {\n  private String name = "Giovanni Kanjiscuk";\n  private String role = "Desenvolvedor Fullstack";\n\n  public void showInfo() {\n    System.out.println(name + " - " + role);\n  }\n}',
                  5000,
                ]}
                speed={70}
                cursor={true}
                repeat={Infinity}
                style={{ display: 'block' }}
              />
            </pre>
          </div>
          
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1e1e1e]/80 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};