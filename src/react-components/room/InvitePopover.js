import React from "react";
import PropTypes from "prop-types";
import styles from "./InvitePopover.scss";
import { CopyableTextInputField } from "../input/CopyableTextInputField";
import { Popover } from "../popover/Popover";
import { ToolbarButton } from "../input/ToolbarButton";
import { ReactComponent as InviteIcon } from "../icons/Invite.svg";
import { Column } from "../layout/Column";

function InvitePopoverContent({ url, code, embed }) {
  return (
    <Column center padding grow className={styles.invitePopover}>
      <CopyableTextInputField fullWidth label="Room Link" value={url} buttonPreset="green" />
      <CopyableTextInputField fullWidth label="Room Code" value={code} buttonPreset="blue" />
      <CopyableTextInputField fullWidth label="Embed Code" value={embed} buttonPreset="purple" />
    </Column>
  );
}

InvitePopoverContent.propTypes = {
  url: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  embed: PropTypes.string.isRequired
};

export function InvitePopoverButton({ url, code, embed, initiallyVisible, popoverApiRef, ...rest }) {
  return (
    <Popover
      title="Invite"
      content={() => <InvitePopoverContent url={url} code={code} embed={embed} />}
      placement="top-start"
      offsetDistance={28}
      initiallyVisible={initiallyVisible}
      popoverApiRef={popoverApiRef}
    >
      {({ togglePopover, popoverVisible, triggerRef }) => (
        <ToolbarButton
          ref={triggerRef}
          icon={<InviteIcon />}
          selected={popoverVisible}
          onClick={togglePopover}
          label="Invite"
          {...rest}
        />
      )}
    </Popover>
  );
}

InvitePopoverButton.propTypes = {
  initiallyVisible: PropTypes.bool,
  popoverApiRef: PropTypes.object,
  ...InvitePopoverContent.propTypes
};
