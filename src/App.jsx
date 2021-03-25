import logo from './logo.svg';
import './App.css';
import './devapi.scss';
import { copyToClipboard } from './utils'
import '../node_modules/hearsay-design-system/lib/components/components.scss';
import '../node_modules/hearsay-design-system/lib/reset/reset.scss';
import '../node_modules/hearsay-design-system/lib/tokens/tokens.scss';
import '../node_modules/hearsay-design-system/lib/mixins/mixins.scss';
import { Icon } from 'hearsay-design-system';
import { Heading, Button } from 'hearsay-design-system/';

function App() {
  return (
    <div className="tokensGrid">
      <table>
        <caption>
          <Heading
            size={Heading.CONSTANTS.HEADING_SIZE.H3}>
            <span>API Tokens</span>

          </Heading>
          <span>Manage the API tokens that are used for the Hearsay Systems API. API documentation can be found at <a target="_blank" href="http://docs.hearsaysocial.com">docs.hearsaysocial.com</a>.</span>
        </caption>
        <colgroup>
          <col />
          <col />
          <col className="hds-table-active" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Token</th>
            <th>Permission</th>
            <th>Workspace</th>
            <th>Created</th>
            <th>Status</th>
            <th className="hds-visiblyHidden">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="colToken"><span className="tokenName">CRM Integration Contacts <br/>*******************************</span>
            <span className="tokenicons">
                <Icon
                  icon={Icon.CONSTANTS.ICON.VIEW}
                /> <Icon
                icon={Icon.CONSTANTS.ICON.COPY}
             />
              </span>
            </th>
            <td>Read/Write</td>
            <td>Full Org.</td>
            <td>11/10/2021 - 9:29 AM</td>
            <td><span><Icon
              color={Icon.CONSTANTS.ICON_COLOR.SUCCESS}
              icon={Icon.CONSTANTS.ICON.CIRCLE_CHECK}
            /> Active</span></td>
            <td>
              <Button
                theme={Button.CONSTANTS.BUTTON_THEME.SECONDARY}
                onClick={() => copyToClipboard('@include hds-table;')}
                size={Button.CONSTANTS.BUTTON_SIZE.SM}
                text="Edit"
              />
            </td>
          </tr>
          <tr>
            <th scope="row"><span className="tokenName">CRM Integration Contacts <br/>*******************************</span>
            <span className="tokenicons">
                <Icon
                  icon={Icon.CONSTANTS.ICON.VIEW}
                /> <Icon
                icon={Icon.CONSTANTS.ICON.COPY}
             />
              </span>
            </th>
            <td>Read/Write</td>
            <td>Full Org.</td>
            <td>11/10/2021 - 9:29 AM</td>
            <td><span><Icon
              color={Icon.CONSTANTS.ICON_COLOR.SUCCESS}
              icon={Icon.CONSTANTS.ICON.CIRCLE_CHECK}
            /> Active</span></td>
            <td>
              <Button
                theme={Button.CONSTANTS.BUTTON_THEME.SECONDARY}
                onClick={() => copyToClipboard('@include hds-table;')}
                size={Button.CONSTANTS.BUTTON_SIZE.SM}
                text="Edit"
              />
            </td>
          </tr>
          <tr>
            <th scope="row"><span className="tokenName">CRM Integration Contacts <br/>*******************************</span>
            <span className="tokenicons">
                <Icon
                  icon={Icon.CONSTANTS.ICON.VIEW}
                /> <Icon
                icon={Icon.CONSTANTS.ICON.COPY}
             />
              </span>
            </th>
            <td>Read/Write</td>
            <td>Full Org.</td>
            <td>11/10/2021 - 9:29 AM</td>
            <td>
            <span><Icon
              icon={Icon.CONSTANTS.ICON.CIRCLE_NEGATIVE}
            /> Inactive</span></td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;