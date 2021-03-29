import logo from './logo.svg';
import './App.css';
import './devapi.scss';
import '../node_modules/hearsay-design-system/lib/components/components.scss';
import '../node_modules/hearsay-design-system/lib/reset/reset.scss';
import '../node_modules/hearsay-design-system/lib/tokens/tokens.scss';
import '../node_modules/hearsay-design-system/lib/mixins/mixins.scss';
import { Icon } from 'hearsay-design-system';
import { Heading, Button, Modal, TextInput, Radio } from 'hearsay-design-system/';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="tokensGrid">
      <Modal
        buttonText={"Dismiss"}
        header='Edit Token'
        onDismiss={() => setShowModal(false)}
        tabTrapText='To top of content'
        visible={showModal}
      >
        <TextInput
          defaultValue='CRM Integration Contacts'
          labelText='Name'
        />
        <Heading
            size={Heading.CONSTANTS.HEADING_SIZE.H5}>
            <span>Workspace Scope</span>

        </Heading>
        <Radio
            labelText="Full Organization"
            name="full_org"
        />
        <Radio
            labelText="Single Workspace"
            name="single_workspace"
        />
        <TextInput
          defaultValue='Enter Workspace ID'
          labelText='Workspace'
        />
        <Button
                theme={Button.CONSTANTS.BUTTON_THEME.DESTRUCTIVE}
                onClick={() => setShowModal(false)}
                size={Button.CONSTANTS.BUTTON_SIZE.SM}
                text="Deavtivate"
              />
        <Button
                theme={Button.CONSTANTS.BUTTON_THEME.SECONDARY}
                onClick={() => setShowModal(false)}
                size={Button.CONSTANTS.BUTTON_SIZE.SM}
                text="Cancel"
              />
        <Button
                theme={Button.CONSTANTS.BUTTON_THEME.PRIMARY}
                onClick={() => setShowModal(false)}
                size={Button.CONSTANTS.BUTTON_SIZE.SM}
                text="Save"
              />
      </Modal>
      <table>
        <caption>
          <Heading
            size={Heading.CONSTANTS.HEADING_SIZE.H3}>
            <span>API Tokens</span>

          </Heading>
          <span>Manage the API tokens that are used for the Hearsay Systems API. API documentation can be found at <a target="_blank" href="http://docs.hearsaysocial.com">docs.hearsaysocial.com</a>.</span>
          <Button
            theme={Button.CONSTANTS.BUTTON_THEME.SECONDARY}
            onClick={() => setShowModal(true)}
            size={Button.CONSTANTS.BUTTON_SIZE.SM}
            text="Genreate New Token"
          />
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
                onClick={() => setShowModal(true)}
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
                onClick={() => setShowModal(true)}
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