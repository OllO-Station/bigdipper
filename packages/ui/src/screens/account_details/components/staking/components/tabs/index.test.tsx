import TabsHeader from '@/screens/account_details/components/staking/components/tabs';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader
          tab={0}
          handleTabChange={jest.fn()}
          tabs={[
            {
              id: 0,
              key: 'key',
              count: '1',
              component: <div id="component" />,
            },
          ]}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
