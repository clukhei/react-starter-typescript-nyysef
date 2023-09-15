import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';
import { SideNav } from '@govtechsg/sgds-react/SideNav';
import '@govtechsg/sgds/css/sgds.css';
export const App = () => {
  const name: string = 'Hello React Button';

  const onChildClicked = (e: number) => {
    console.warn('callback from parent triggered', e);
  };

  return (
    <div className="p-2">
      <h1>React TSX Starter</h1>
      <div>containing:</div>
      <SideNav>
        <SideNav.Item eventKey="0">
          <SideNav.Button>SideNav Item #1</SideNav.Button>
          <SideNav.Collapse>
              <SideNav.Link eventKey="nl-1" href="#">
                number one
              </SideNav.Link>
              <SideNav.Link eventKey="nl-2" href="#">
                number one
              </SideNav.Link>
              <SideNav.Link eventKey="nl-3" href="#">
                number one
              </SideNav.Link>
          </SideNav.Collapse>
        </SideNav.Item>
        <SideNav.Item eventKey="1">
          <SideNav.Button>SideNav Item #2</SideNav.Button>
          <SideNav.Collapse>
            <>
              <SideNav.Link eventKey="nl-4">number two</SideNav.Link>
              <SideNav.Link eventKey="nl-6">number two</SideNav.Link>
              <SideNav.Link eventKey="nl-7">number two</SideNav.Link>
              <SideNav.Link eventKey="nl-8">number two</SideNav.Link>
            </>
          </SideNav.Collapse>
        </SideNav.Item>
        <SideNav.Item eventKey="2">
          <SideNav.Button href="#">SideNav Item #3</SideNav.Button>
        </SideNav.Item>
      </SideNav>
      <ButtonCounter name={name} onClicked={(e) => onChildClicked(e)} />
    </div>
  );
};
