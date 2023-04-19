import React from 'react';
import './ModalWindow.css';

export const ModalWindow = ({children}) => {


    const ttt = {
        "parent_material_ids": {
            "isMulti": "false",
            "displayValue": "Test_Parent_Material_ID",
            "textValue": "Test_Parent_Material_ID",
            "type": "text",
            "value": "Test_Parent_Material_ID"
        },
        "cold_storage_location": {
            "isMulti": "false",
            "displayValue": "1st Floor",
            "textValue": "1st Floor",
            "type": "text",
            "value": "1st Floor"
        },
        "location": {
            "isMulti": "false",
            "displayValue": "BAI Building 2000",
            "textValue": "BAI Building 2000",
            "type": "text",
            "value": "BAI Building 2000"
        },
        "starting_amount": {"isMulti": "false", "displayValue": "20", "textValue": "20", "type": "text", "value": "20"},
        "rack_box_coordinates": {
            "isMulti": "false",
            "displayValue": "A5-A8",
            "textValue": "A5-A8",
            "type": "text",
            "value": "A5-A8"
        },
        "material_subtype": {
            "isMulti": "false",
            "displayValue": "Test Cell Line",
            "textValue": "Test Cell Line",
            "type": "text",
            "value": "Test Cell Line"
        },
        "alias_ids": {
            "isMulti": "false",
            "displayValue": "ALIAS_Test",
            "textValue": "ALIAS_Test",
            "type": "text",
            "value": "ALIAS_Test"
        },
        "legal_agreement": {
            "isMulti": "false",
            "displayValue": "Test_legal_agreement",
            "textValue": "Test_legal_agreement",
            "type": "text",
            "value": "Test_legal_agreement"
        },
        "current_amount": {"isMulti": "false", "displayValue": "18", "textValue": "18", "type": "text", "value": "18"},
        "lot_number": {
            "isMulti": "false",
            "displayValue": "TESTLOT_19049",
            "textValue": "TESTLOT_19049",
            "type": "text",
            "value": "TESTLOT_19049"
        },
        "amount_units": {
            "isMulti": "false",
            "displayValue": "Vials",
            "textValue": "Vials",
            "type": "text",
            "value": "Vials"
        },
        "creation_date": {
            "isMulti": "false",
            "displayValue": "11-11-2022",
            "textValue": "11-11-2022",
            "type": "text",
            "value": "11-11-2022"
        },
        "mta": {
            "isMulti": "false",
            "displayValue": "test_mta",
            "textValue": "test_mta",
            "type": "text",
            "value": "test_mta"
        },
        "rack": {"isMulti": "false", "displayValue": null, "textValue": null, "type": "entity_link", "value": null},
        "creation_benchling_id": {
            "isMulti": "false",
            "displayValue": "test_benchling_id",
            "textValue": "test_benchling_id",
            "type": "text",
            "value": "test_benchling_id"
        },
        "qc_benchling_id": {
            "isMulti": "false",
            "displayValue": "qc_benchling_id",
            "textValue": "qc_benchling_id",
            "type": "text",
            "value": "qc_benchling_id"
        },
        "material_type": {
            "isMulti": "false",
            "displayValue": "Cell Line",
            "textValue": "Cell Line",
            "type": "text",
            "value": "Cell Line"
        },
        "box": {"isMulti": "false", "displayValue": null, "textValue": null, "type": "entity_link", "value": null},
        "catalog_number": {
            "isMulti": "false",
            "displayValue": "TESTCAT_1049",
            "textValue": "TESTCAT_1049",
            "type": "text",
            "value": "TESTCAT_1049"
        },
        "contact_email": {
            "isMulti": "false",
            "displayValue": "ccheng@altoslabs.com",
            "textValue": "ccheng@altoslabs.com",
            "type": "text",
            "value": "ccheng@altoslabs.com"
        },
        "comments": {
            "isMulti": "false",
            "displayValue": "Testing Polaris",
            "textValue": "Testing Polaris",
            "type": "long_text",
            "value": "Testing Polaris"
        }
    }
    return <div className={'background'}>{children}</div>;
};
