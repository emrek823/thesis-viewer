---
source_pdf: "https://drive.google.com/file/d/135_Mfk2n5yq56NSn7-rAu1pfhvGTsiId/view"
drive_folder: "Portfolio/Solstice Health/Solstice Data Room/Solstice Product"
type: portfolio
company: Solstice Health
ingested: 2025-12-27
original_filename: "SamplePatientRawDataHIN(SameProgressNote).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/135_Mfk2n5yq56NSn7-rAu1pfhvGTsiId/view)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ClinicalDocument xmlns="urn:hl7-org:v3">
  <realmCode code="US" />
  <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3" />
  <templateId root="1.2.840.114350.1.72.1.51693" />
  <templateId root="2.16.840.1.113883.10.20.22.1.1" />
  <templateId root="2.16.840.1.113883.10.20.22.1.1" extension="2015-08-01" />
  <templateId root="2.16.840.1.113883.10.20.22.1.9" />
  <templateId root="2.16.840.1.113883.10.20.22.1.9" extension="2015-08-01" />
  <id assigningAuthorityName="EPC" root="1.2.840.114350.1.13.144.2.7.8.688883.194252249" />
  <code code="11506-3" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Subsequent evaluation note" />
  <title>Encounter Summary</title>
  <effectiveTime value="20230908151141-0700" />
  <confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25" displayName="Normal" />
  <languageCode code="en-US" />
  <setId assigningAuthorityName="EPC" extension="7c55fb00-4e94-11ee-bdcf-530498c250e8" root="1.2.840.114350.1.13.144.2.7.1.1" />
  <versionNumber value="2" />
  <recordTarget>
    <patientRole>
      <id root="1.2.840.114350.1.13.144.2.7.3.688884.100" extension="SALLT728CGSB34T" />
      <addr use="HP">
        <streetAddressLine>1072 N 2ND ST</streetAddressLine>
        <county>MARION</county>
        <city>SILVERTON</city>
        <state>OR</state>
        <postalCode>97381-1253</postalCode>
        <country>US</country>
        <useablePeriod xsi:type="IVL_TS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
          <low value="20230719" />
          <high nullFlavor="UNK" />
        </useablePeriod>
      </addr>
      <addr use="HP">
        <streetAddressLine>1072 N. 2ND ST</streetAddressLine>
        <county>MARION</county>
        <city>SILVERTON</city>
        <state>OR</state>
        <postalCode>97381-1361</postalCode>
        <country>US</country>
        <useablePeriod xsi:type="IVL_TS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
          <low value="20210615" />
          <high value="20230718" />
        </useablePeriod>
      </addr>
      <telecom use="MC" value="tel:+1-503-856-2913" />
      <telecom use="HP" value="tel:+1-503-856-2913" />
      <telecom value="mailto:[REDACTED]" use="L" />
      <name use="L">
        <given>[REDACTED]</given>
        <given>[REDACTED]</given>
        <given>[REDACTED]</given>
        <family>[REDACTED]</family>
        <validTime>
          <low nullFlavor="NA" />
          <high nullFlavor="NA" />
        </validTime>
      </name>
      <name use="P">
        <given>[REDACTED]</given>
        <family>[REDACTED]</family>
        <validTime>
          <low nullFlavor="UNK" />
          <high nullFlavor="UNK" />
        </validTime>
      </name>
      <name use="P">
        <given>[REDACTED]</given>
        <given>[REDACTED]</given>
        <given>[REDACTED]</given>
        <family>[REDACTED]</family>
        <validTime>
          <low nullFlavor="UNK" />
          <high nullFlavor="UNK" />
        </validTime>
      </name>
      <name use="P">
        <given>[REDACTED]</given>
        <given>[REDACTED]</given>
        <family>[REDACTED]</family>
        <validTime>
          <low nullFlavor="UNK" />
          <high nullFlavor="UNK" />
        </validTime>
      </name>
      <administrativeGenderCode code="M" codeSystem="2.16.840.1.113883.5.1" codeSystemName="AdministrativeGenderCode" displayName="Male" />
      <birthTime value="19530626" />
      <sdtc:deceasedInd value="false" xmlns:sdtc="urn:hl7-org:sdtc" />
      <maritalStatusCode code="W" codeSystem="2.16.840.1.113883.5.2" codeSystemName="MaritalStatusCode" displayName="Widowed" />
      <religiousAffiliationCode code="5" codeSystem="2.16.840.1.113883.5.1076" codeSystemName="ReligiousAffiliation" displayName="Catholic" />
      <raceCode code="WHITE" codeSystem="2.16.840.1.113883.6.238" codeSystemName="CDC Race and Ethnicity" displayName="White" />
      <ethnicGroupCode code="Non-Hispanic/Latino" codeSystem="2.16.840.1.113883.6.238" codeSystemName="CDC Race and Ethnicity" displayName="Non-Hispanic/Latino" />
      <languageCommunication>
        <languageCode code="eng" />
        <modeCode code="RWR" codeSystem="2.16.840.1.113883.5.60" displayName="Received Written" />
        <preferenceInd value="true" />
      </languageCommunication>
    </patientRole>
  </recordTarget>
  <providerOrganization>
    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
    <name>Salem Health</name>
    <telecom nullFlavor="NI" />
    <addr use="WP">
      <streetAddressLine nullFlavor="UNK" />
      <city>Salem</city>
      <state>OR</state>
      <postalCode>97301</postalCode>
      <country>US</country>
    </addr>
  </providerOrganization>
  <patientRole />
  <recordTarget />
  <author>
    <time value="20230908151141-0700" />
    <assignedAuthor>
      <id root="1.2.840.114350.1.1" extension="10.4" />
      <addr nullFlavor="NA" />
      <telecom nullFlavor="NA" />
      <assignedAuthoringDevice>
        <manufacturerModelName>Epic Version 10.4</manufacturerModelName>
        <softwareName>Epic Version 10.4</softwareName>
      </assignedAuthoringDevice>
      <representedOrganization>
        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
        <name>Salem Health</name>
        <telecom nullFlavor="NI" />
        <addr use="WP">
          <streetAddressLine nullFlavor="UNK" />
          <city>Salem</city>
          <state>OR</state>
          <postalCode>97301</postalCode>
          <country>US</country>
        </addr>
      </representedOrganization>
    </assignedAuthor>
  </author>
  <custodian>
    <assignedCustodian>
      <representedCustodianOrganization>
        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
        <name>Salem Health</name>
        <telecom nullFlavor="NI" />
        <addr use="WP">
          <streetAddressLine nullFlavor="UNK" />
          <city>Salem</city>
          <state>OR</state>
          <postalCode>97301</postalCode>
          <country>US</country>
        </addr>
      </representedCustodianOrganization>
    </assignedCustodian>
  </custodian>
  <legalAuthenticator>
    <time value="20230908151141-0700" />
    <signatureCode code="S" />
    <assignedEntity>
      <id nullFlavor="UNK" />
      <code nullFlavor="UNK" />
      <addr nullFlavor="UNK" />
      <telecom nullFlavor="UNK" />
      <assignedPerson>
        <name nullFlavor="UNK" />
      </assignedPerson>
    </assignedEntity>
  </legalAuthenticator>
  <participant typeCode="IND">
    <time value="20210413" />
    <associatedEntity classCode="ECON">
      <id root="1.2.840.114350.1.13.144.2.7.2.827665" extension="2644890" />
      <code nullFlavor="OTH">
        <originalText>Son</originalText>
      </code>
      <addr use="HP">
        <streetAddressLine nullFlavor="UNK" />
        <county>MARION</county>
        <city>SILVERTON</city>
        <state>OR</state>
        <postalCode>97381</postalCode>
        <country>US</country>
      </addr>
      <telecom use="MC" value="tel:+1-971-719-3999" />
      <telecom use="HP" value="tel:+1-503-874-4449" />
      <associatedPerson>
        <name>
          <given>[REDACTED]</given>
          <family>[REDACTED]</family>
        </name>
      </associatedPerson>
    </associatedEntity>
  </participant>
  <participant typeCode="IND">
    <time value="20210413" />
    <associatedEntity classCode="ECON">
      <id root="1.2.840.114350.1.13.144.2.7.2.827665" extension="2644893" />
      <code nullFlavor="OTH">
        <originalText>Daughter</originalText>
      </code>
      <addr nullFlavor="UNK" />
      <telecom nullFlavor="UNK" />
      <associatedPerson>
        <name>
          <given>[REDACTED]</given>
          <family>[REDACTED]</family>
        </name>
      </associatedPerson>
    </associatedEntity>
  </participant>
  <documentationOf typeCode="DOC">
    <serviceEvent classCode="PCPR">
      <templateId root="2.16.840.1.113883.10.20.21.3.1" />
      <effectiveTime>
        <low value="20230801122700-0700" />
        <high value="20230801175800-0700" />
      </effectiveTime>
      <performer typeCode="PRF">
        <functionCode code="PCP" codeSystem="2.16.840.1.113883.5.88" codeSystemName="ParticipationFunction" displayName="Primary Care Provider">
          <originalText>General</originalText>
        </functionCode>
        <time>
          <low value="20190304" />
          <high nullFlavor="NI" />
        </time>
        <assignedEntity>
          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="5016675" />
          <code code="207000000X" codeSystem="2.16.840.1.113883.6.101" displayName="FAMILY PRACTICE PHYSICIAN">
            <originalText>Family Practice</originalText>
            <translation code="19" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Family Medicine" />
            <translation code="9" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Family Practice" />
          </code>
          <addr use="WP">
            <streetAddressLine>250 W Marquam St</streetAddressLine>
            <city>MOUNT ANGEL</city>
            <state>OR</state>
            <postalCode>97362</postalCode>
            <country>US</country>
          </addr>
          <telecom use="WP" value="tel:+1-503-845-2000" />
          <telecom value="fax:+1-503-845-2384" />
          <assignedPerson>
            <name use="L">
              <given>[REDACTED]</given>
              <given>R</given>
              <given>[REDACTED]</given>
              <family>[REDACTED]</family>
              <suffix qualifier="AC"> MD</suffix>
              <validTime>
                <low nullFlavor="UNK" />
                <high nullFlavor="UNK" />
              </validTime>
            </name>
          </assignedPerson>
          <representedOrganization classCode="ORG">
            <name>Legacy Health</name>
            <telecom nullFlavor="UNK" />
            <addr nullFlavor="UNK" />
          </representedOrganization>
        </assignedEntity>
      </performer>
      <performer typeCode="PRF">
        <functionCode nullFlavor="OTH">
          <originalText>Physical Therapist</originalText>
          <translation code="916" codeSystem="1.2.840.114350.1.13.144.2.7.4.698084.80114" codeSystemName="EPIC" displayName="Physical Therapist" />
        </functionCode>
        <time>
          <low value="20221010" />
          <high nullFlavor="NI" />
        </time>
        <assignedEntity>
          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1207568" />
          <code code="225100000X" codeSystem="2.16.840.1.113883.6.101" displayName="PHYSICAL THERAPY PHYSICAL THERAPIST">
            <originalText>Physical Therapy</originalText>
            <translation code="87" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Physical Therapy" />
            <translation code="34" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Physical Therapy" />
          </code>
          <addr nullFlavor="UNK" />
          <telecom nullFlavor="NA" />
          <assignedPerson>
            <name use="L">
              <given>Bruce</given>
              <given>C</given>
              <family>Coy</family>
              <suffix qualifier="AC"> PT</suffix>
              <validTime>
                <low nullFlavor="UNK" />
                <high nullFlavor="UNK" />
              </validTime>
            </name>
          </assignedPerson>
          <representedOrganization classCode="ORG">
            <name>Salem Health</name>
            <telecom nullFlavor="UNK" />
            <addr use="WP">
              <streetAddressLine nullFlavor="UNK" />
              <city>Salem</city>
              <state>OR</state>
              <postalCode>97301</postalCode>
              <country>US</country>
            </addr>
          </representedOrganization>
        </assignedEntity>
      </performer>
    </serviceEvent>
  </documentationOf>
  <relatedDocument typeCode="RPLC">
    <parentDocument>
      <id assigningAuthorityName="EPC" root="1.2.840.114350.1.13.144.2.7.8.688883.194251796" />
      <setId assigningAuthorityName="EPC" extension="7c55fb00-4e94-11ee-bdcf-530498c250e8" root="1.2.840.114350.1.13.144.2.7.1.1" />
      <versionNumber value="1" />
    </parentDocument>
  </relatedDocument>
  <componentOf>
    <encompassingEncounter>
      <id root="1.2.840.114350.1.13.144.2.7.3.698084.8" extension="89732096" />
      <code code="AMB" codeSystem="2.16.840.1.113883.5.4" displayName="Ambulatory">
        <originalText>Hospital Encounter</originalText>
        <translation code="3" codeSystem="1.2.840.114350.1.72.1.30" displayName="Hospital Encounter" />
        <translation code="0" codeSystem="1.2.840.114350.1.72.1.30.1" />
      </code>
      <effectiveTime>
        <low value="20230801122700-0700" />
        <high value="20230801175800-0700" />
      </effectiveTime>
      <dischargeDispositionCode code="3" codeSystem="1.2.840.114350.1.13.144.2.7.4.698084.18888" codeSystemName="EPC" displayName="Routine – Home, Group Home, Independent Living Facility" />
      <responsibleParty>
        <assignedEntity>
          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
          <addr use="WP">
            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
            <city>Salem</city>
            <state>OR</state>
            <postalCode>97301</postalCode>
          </addr>
          <telecom use="WP" value="tel:+1-503-399-7520" />
          <telecom value="fax:+1-503-362-7344" />
          <assignedPerson>
            <name>
              <given>Robert</given>
              <given>James</given>
              <family>Ponec</family>
              <family>[REDACTED]</family>
            </name>
          </assignedPerson>
          <representedOrganization>
            <name>Salem Health</name>
          </representedOrganization>
        </assignedEntity>
      </responsibleParty>
      <encounterParticipant typeCode="ATND">
        <time value="20230801122700-0700" />
        <assignedEntity>
          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
            <originalText>Gastroenterology</originalText>
            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
          </code>
          <addr use="WP">
            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
            <city>Salem</city>
            <state>OR</state>
            <postalCode>97301</postalCode>
          </addr>
          <telecom use="WP" value="tel:+1-503-399-7520" />
          <telecom value="fax:+1-503-362-7344" />
          <assignedPerson>
            <name use="L">
              <given>Robert</given>
              <given>[REDACTED]</given>
              <family>[REDACTED]</family>
              <suffix qualifier="AC"> MD</suffix>
              <validTime>
                <low nullFlavor="UNK" />
                <high nullFlavor="UNK" />
              </validTime>
            </name>
          </assignedPerson>
        </assignedEntity>
      </encounterParticipant>
      <encounterParticipant typeCode="ADM">
        <time value="20230801122700-0700" />
        <assignedEntity>
          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
            <originalText>Gastroenterology</originalText>
            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
          </code>
          <addr use="WP">
            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
            <city>Salem</city>
            <state>OR</state>
            <postalCode>97301</postalCode>
          </addr>
          <telecom use="WP" value="tel:+1-503-399-7520" />
          <telecom value="fax:+1-503-362-7344" />
          <assignedPerson>
            <name use="L">
              <given>[REDACTED]</given>
              <given>[REDACTED]</given>
              <family>[REDACTED]</family>
              <suffix qualifier="AC"> MD</suffix>
              <validTime>
                <low nullFlavor="UNK" />
                <high nullFlavor="UNK" />
              </validTime>
            </name>
          </assignedPerson>
        </assignedEntity>
      </encounterParticipant>
      <location>
        <healthCareFacility>
          <id root="1.2.840.114350.1.13.144.2.7.2.686980" extension="11002000" />
          <code nullFlavor="UNK">
            <originalText>SURGERY</originalText>
            <translation code="21" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4150" codeSystemName="Epic.DepartmentSpecialty" displayName="General Surgery" />
          </code>
          <location>
            <name>Prep-Recovery</name>
            <addr use="WP">
              <streetAddressLine>890 Oak Street</streetAddressLine>
              <county>MARION</county>
              <city>Salem</city>
              <state>OR</state>
              <postalCode>97301</postalCode>
              <country>US</country>
            </addr>
          </location>
          <serviceProviderOrganization>
            <id root="1.2.840.114350.1.13.144.2.7.2.696570" extension="10001" />
            <name>SALEM HOSPITAL</name>
            <addr use="WP">
              <streetAddressLine>890 Oak Street</streetAddressLine>
              <county>MARION</county>
              <city>Salem</city>
              <state>OR</state>
              <postalCode>97301</postalCode>
              <country>US</country>
            </addr>
            <asOrganizationPartOf>
              <wholeOrganization>
                <name>Salem Health</name>
                <addr nullFlavor="NA" />
              </wholeOrganization>
            </asOrganizationPartOf>
          </serviceProviderOrganization>
        </healthCareFacility>
      </location>
    </encompassingEncounter>
  </componentOf>
  <component>
    <structuredBody>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.12" />
          <code code="29299-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="REASON FOR VISIT" />
          <title>Reason for Visit</title>
          <text>
            <list>
              <item>
                <caption>Auth/Cert (Routine)</caption>
                <table>
                  <colgroup>
                    <col span="4" width="25%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Specialty</th>
                      <th>Diagnoses Procedures</th>
                      <th>Referred By Contact</th>
                      <th>Referred To Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <paragraph styleCode="xcellHeader">Diagnoses</paragraph>
                        <paragraph>Personal history of colonic polyps</paragraph>
                        <paragraph>Dysphagia, pharyngoesophageal phase</paragraph>
                        <paragraph>Gastric tympany</paragraph>
                        <paragraph>Personal history of colonic polyps [Z86.010]</paragraph>
                        <br />
                        <paragraph styleCode="xcellHeader">Procedures</paragraph>
                        <paragraph>COLONOSCOPY,DIAGNOSTIC</paragraph>
                        <paragraph>PR EGD INSERT GUIDE WIRE DILATOR PASSAGE ESOPHAGUS</paragraph>
                        <paragraph>ESOPHAGOGASTRODUODENOSCOPY WITH DILATION</paragraph>
                        <paragraph>COLONOSCOPY</paragraph>
                      </td>
                      <td>
                        <paragraph>[REDACTED]</paragraph>
                        <paragraph>875 Oak St. SE #3010</paragraph>
                        <paragraph>Salem, OR 97301</paragraph>
                        <paragraph>Phone: 503-399-7520</paragraph>
                        <paragraph>Fax: 503-362-7344</paragraph>
                      </td>
                      <td>
                        <paragraph>Prep-Recovery</paragraph>
                        <paragraph>890 Oak Street</paragraph>
                        <paragraph>Salem, OR 97301</paragraph>
                        <paragraph>Phone: 503-814-2101</paragraph>
                        <paragraph>Fax: 503-814-2062</paragraph>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <colgroup>
                    <col width="13%" />
                    <col width="12%" />
                    <col width="25%" />
                    <col width="13%" />
                    <col width="12%" />
                    <col width="13%" />
                    <col width="12%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Referral ID</th>
                      <th>Status</th>
                      <th>Reason</th>
                      <th>Start Date</th>
                      <th>Expiration Date</th>
                      <th>Visits Requested</th>
                      <th>Visits Authorized</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4788606</td>
                      <td styleCode="xflagData" />
                      <td />
                      <td>8/1/2023</td>
                      <td>10/30/2023</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </item>
            </list>
          </text>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.22" />
          <templateId root="2.16.840.1.113883.10.20.22.2.22" extension="2015-08-01" />
          <templateId root="2.16.840.1.113883.10.20.22.2.22.1" />
          <templateId root="2.16.840.1.113883.10.20.22.2.22.1" extension="2015-08-01" />
          <code code="46240-8" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History of Hospitalizations+Outpatient visits Narrative" />
          <title>Encounter Details</title>
          <text>
            <table>
              <colgroup>
                <col width="10%" />
                <col width="15%" />
                <col span="3" width="25%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Department</th>
                  <th>Care Team</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr ID="encounter2" styleCode="xRowNormal">
                  <td>08/01/2023 12:27 PM PDT - 08/01/2023 5:58 PM PDT</td>
                  <td ID="encounter2type">Hospital Encounter</td>
                  <td>
                    <paragraph>Prep-Recovery</paragraph>
                    <paragraph>890 Oak Street</paragraph>
                    <paragraph>Salem, OR 97301</paragraph>
                    <paragraph>503-814-2101</paragraph>
                  </td>
                  <td>
                    <paragraph styleCode="Bold">[REDACTED] MD</paragraph>
                    <paragraph>875 Oak St. SE #3010</paragraph>
                    <paragraph>Salem, OR 97301</paragraph>
                    <paragraph>503-399-7520 (Work)</paragraph>
                    <paragraph>503-362-7344 (Fax)</paragraph>
                  </td>
                  <td>
                    <content ID="encounter2desc">Personal history of colonic polyps</content>
                    <br />Discharge Disposition: Routine – Home, Group Home, Independent Living Facility
                  </td>
                </tr>
              </tbody>
            </table>
          </text>
          <entry>
            <encounter classCode="ENC" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.49" />
              <templateId root="2.16.840.1.113883.10.20.22.4.49" extension="2015-08-01" />
              <id assigningAuthorityName="EPC" root="1.2.840.114350.1.13.144.2.7.3.698084.8" extension="89732096" />
              <code code="AMB" codeSystem="2.16.840.1.113883.5.4">
                <originalText>
                  <reference value="#encounter2type" />
                </originalText>
                <translation code="3" codeSystem="1.2.840.114350.1.13.144.2.7.4.698084.30" codeSystemName="Epic.EncounterType" />
                <translation code="3" codeSystem="1.2.840.114350.1.72.1.30" />
                <translation code="0" codeSystem="1.2.840.114350.1.72.1.30.1" />
              </code>
              <text>
                <reference value="#encounter2" />
              </text>
              <statusCode code="completed" />
              <effectiveTime>
                <low value="20230801122700-0700" />
                <high value="20230801175800-0700" />
              </effectiveTime>
              <sdtc:dischargeDispositionCode code="3" codeSystem="1.2.840.114350.1.13.144.2.7.4.698084.18888" codeSystemName="EPC" displayName="Routine - Home, Group Home, Independent Living Facility" xmlns:sdtc="urn:hl7-org:sdtc">
                <originalText>Routine Home, Group Home, Independent Living Facility</originalText>
              </sdtc:dischargeDispositionCode>
              <performer typeCode="PRF">
                <time>
                  <low nullFlavor="UNK" />
                  <high nullFlavor="UNK" />
                </time>
                <assignedEntity classCode="ASSIGNED">
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                  <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                    <originalText>Gastroenterology</originalText>
                    <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                    <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                  </code>
                  <addr use="WP">
                    <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                    <city>Salem</city>
                    <state>OR</state>
                    <postalCode>97301</postalCode>
                  </addr>
                  <telecom use="WP" value="tel:+1-503-399-7520" />
                  <telecom value="fax:+1-503-362-7344" />
                  <assignedPerson>
                    <name use="L">
                      <given>[REDACTED]</given>
                      <given>[REDACTED]</given>
                      <family>[REDACTED]</family>
                      <suffix qualifier="AC">MD</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization classCode="ORG">
                    <name>Salem Health</name>
                    <telecom nullFlavor="NI" />
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedEntity>
              </performer>
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20230524075142-0700" />
                <assignedAuthor>
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
              <participant typeCode="LOC">
                <participantRole classCode="SDLOC">
                  <templateId root="2.16.840.1.113883.10.20.22.4.32" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.686980" extension="11002000" />
                  <code nullFlavor="UNK">
                    <originalText>SURGERY</originalText>
                    <translation code="21" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4150" codeSystemName="Epic.DepartmentSpecialty" displayName="General Surgery" />
                  </code>
                  <addr use="WP">
                    <streetAddressLine>890 Oak Street</streetAddressLine>
                    <county>MARION</county>
                    <city>Salem</city>
                    <state>OR</state>
                    <postalCode>97301</postalCode>
                    <country>US</country>
                  </addr>
                  <playingEntity classCode="PLC">
                    <name>Prep-Recovery</name>
                    <desc>SURGERY</desc>
                  </playingEntity>
                </participantRole>
              </participant>
              <entryRelationship typeCode="COMP">
                <act classCode="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.64" />
                  <code code="48767-8" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" />
                  <text>
                    <reference value="#encounter2desc" />
                  </text>
                  <statusCode code="completed" />
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classCode="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-14624-concern" />
                  <code code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ" inversionInd="false">
                    <observation classCode="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-14624" />
                      <code code="282291009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT">
                        <translation code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                      </code>
                      <text>Personal history of colonic polyps</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value code="428283002" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Personal history of colonic polyps</originalText>
                        <translation code="Z86.010" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10" displayName="Personal history of colonic polyps" />
                        <translation code="V12.72" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9" displayName="Personal history of colonic polyps" />
                        <translation code="34883" codeSystem="2.16.840.1.113883.3.247.1.1" codeSystemName="Intelligent Medical Objects ProblemIT" displayName="Personal history of colonic polyps" />
                      </value>
                      <author>
                        <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                        <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                        <time value="20230727170758-0700" />
                        <assignedAuthor>
                          <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="284560664" />
                          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                          <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                            <originalText>Gastroenterology</originalText>
                            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                          </code>
                          <addr use="WP">
                            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                            <city>Salem</city>
                            <state>OR</state>
                            <postalCode>97301</postalCode>
                          </addr>
                          <telecom use="WP" value="tel:+1-503-399-7520" />
                          <telecom use="WP" value="fax:+1-503-362-7344" />
                          <assignedPerson>
                            <name use="L">
                              <given>[REDACTED]</given>
                              <given>[REDACTED]</given>
                              <family>[REDACTED]</family>
                              <suffix qualifier="AC"> MD</suffix>
                              <validTime>
                                <low nullFlavor="UNK" />
                                <high nullFlavor="UNK" />
                              </validTime>
                            </name>
                          </assignedPerson>
                          <representedOrganization>
                            <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                            <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                            <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                            <name>Salem Health</name>
                            <addr use="WP">
                              <streetAddressLine nullFlavor="UNK" />
                              <city>Salem</city>
                              <state>OR</state>
                              <postalCode>97301</postalCode>
                              <country>US</country>
                            </addr>
                          </representedOrganization>
                        </assignedAuthor>
                      </author>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" extension="2019-06-20" />
                          <code code="33999-4" codeSystem="2.16.840.1.113883.6.1" displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value code="55561003" codeSystem="2.16.840.1.113883.6.96" xsi:type="CD" displayName="Active" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.24.3.166" extension="2019-12-01" />
                          <code code="263486008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Rank" />
                          <value xsi:type="INT" value="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classClass="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-118305-concern" />
                  <code code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ" inversionInd="false">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-118305" />
                      <code code="282291009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT">
                        <translation code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                      </code>
                      <text>Esophageal dysphagia</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value code="40890009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Esophageal dysphagia</originalText>
                        <translation code="R13.19" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10" displayName="Esophageal dysphagia" />
                        <translation code="787.29" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9" displayName="Esophageal dysphagia" />
                        <translation code="8211" codeSystem="2.16.840.1.113883.3.247.1.1" codeSystemName="Intelligent Medical Objects ProblemIT" displayName="Esophageal dysphagia" />
                      </value>
                      <author>
                        <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                        <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                        <time value="20230727170756-0700" />
                        <assignedAuthor>
                          <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="284560664" />
                          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                          <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                            <originalText>Gastroenterology</originalText>
                            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                          </code>
                          <addr use="WP">
                            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                            <city>Salem</city>
                            <state>OR</state>
                            <postalCode>97301</postalCode>
                          </addr>
                          <telecom use="WP" value="tel:+1-503-399-7520" />
                          <telecom value="fax:+1-503-362-7344" />
                          <assignedPerson>
                            <name use="L">
                              <given>[REDACTED]</given>
                              <given>[REDACTED]</given>
                              <family>[REDACTED]</family>
                              <suffix qualifier="AC"> MD</suffix>
                              <validTime>
                                <low nullFlavor="UNK" />
                                <high nullFlavor="UNK" />
                              </validTime>
                            </name>
                          </assignedPerson>
                          <representedOrganization>
                            <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                            <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                            <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                            <name>Salem Health</name>
                            <addr use="WP">
                              <streetAddressLine nullFlavor="UNK" />
                              <city>Salem</city>
                              <state>OR</state>
                              <postalCode>97301</postalCode>
                              <country>US</country>
                            </addr>
                          </representedOrganization>
                        </assignedAuthor>
                      </author>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" extension="2019-06-20" />
                          <code code="33999-4" codeSystem="2.16.840.1.113883.6.1" displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value code="55561003" codeSystem="2.16.840.1.113883.6.96" xsi:type="CD" displayName="Active" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.24.3.166" extension="2019-12-01" />
                          <code code="263486008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Rank" />
                          <value xsi:type="INT" value="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classClass="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-166191-concern" />
                  <code code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ" inversionInd="false">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-166191" />
                      <code code="282291009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT">
                        <translation code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                      </code>
                      <text>GERD (gastroesophageal reflux disease)</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value code="235595009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>GERD (gastroesophageal reflux disease)</originalText>
                        <translation code="K21.9" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10" displayName="GERD (gastroesophageal reflux disease)" />
                        <translation code="530.81" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9" displayName="GERD (gastroesophageal reflux disease)" />
                        <translation code="72350" codeSystem="2.16.840.1.113883.3.247.1.1" codeSystemName="Intelligent Medical Objects ProblemIT" displayName="GERD (gastroesophageal reflux disease)" />
                      </value>
                      <author>
                        <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                        <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                        <time value="20230727170757-0700" />
                        <assignedAuthor>
                          <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="284560664" />
                          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                          <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                            <originalText>Gastroenterology</originalText>
                            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                          </code>
                          <addr use="WP">
                            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                            <city>Salem</city>
                            <state>OR</state>
                            <postalCode>97301</postalCode>
                          </addr>
                          <telecom use="WP" value="tel:+1-503-399-7520" />
                          <telecom value="fax:+1-503-362-7344" />
                          <assignedPerson>
                            <name use="L">
                              <given>[REDACTED]</given>
                              <given>[REDACTED]</given>
                              <family>[REDACTED]</family>
                              <suffix qualifier="AC"> MD</suffix>
                              <validTime>
                                <low nullFlavor="UNK" />
                                <high nullFlavor="UNK" />
                              </validTime>
                            </name>
                          </assignedPerson>
                          <representedOrganization>
                            <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                            <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                            <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                            <name>Salem Health</name>
                            <addr use="WP">
                              <streetAddressLine nullFlavor="UNK" />
                              <city>Salem</city>
                              <state>OR</state>
                              <postalCode>97301</postalCode>
                              <country>US</country>
                            </addr>
                          </representedOrganization>
                        </assignedAuthor>
                      </author>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" extension="2019-06-20" />
                          <code code="33999-4" codeSystem="2.16.840.1.113883.6.1" displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value code="55561003" codeSystem="2.16.840.1.113883.6.96" xsi:type="CD" displayName="Active" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.24.3.166" extension="2019-12-01" />
                          <code code="263486008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Rank" />
                          <value xsi:type="INT" value="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classClass="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-3549-concern" />
                  <code code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ" inversionInd="false">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-3549" />
                      <code code="282291009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT">
                        <translation code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                      </code>
                      <text>Paraplegia (CMS/HCC)</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value code="60389000" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Paraplegia (CMS/HCC)</originalText>
                        <translation code="G82.20" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10" displayName="Paraplegia (CMS/HCC)" />
                        <translation code="344.1" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9" displayName="Paraplegia (CMS/HCC)" />
                        <translation code="16018" codeSystem="2.16.840.1.113883.3.247.1.1" codeSystemName="Intelligent Medical Objects ProblemIT" displayName="Paraplegia (CMS/HCC)" />
                      </value>
                      <author>
                        <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                        <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                        <time value="20230727170844-0700" />
                        <assignedAuthor>
                          <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="284560664" />
                          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                          <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                            <originalText>Gastroenterology</originalText>
                            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                          </code>
                          <addr use="WP">
                            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                            <city>Salem</city>
                            <state>OR</state>
                            <postalCode>97301</postalCode>
                          </addr>
                          <telecom use="WP" value="tel:+1-503-399-7520" />
                          <telecom value="fax:+1-503-362-7344" />
                          <assignedPerson>
                            <name use="L">
                              <given>[REDACTED]</given>
                              <given>[REDACTED]</given>
                              <family>[REDACTED]</family>
                              <suffix qualifier="AC"> MD</suffix>
                              <validTime>
                                <low nullFlavor="UNK" />
                                <high nullFlavor="UNK" />
                              </validTime>
                            </name>
                          </assignedPerson>
                          <representedOrganization>
                            <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                            <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                            <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                            <name>Salem Health</name>
                            <addr use="WP">
                              <streetAddressLine nullFlavor="UNK" />
                              <city>Salem</city>
                              <state>OR</state>
                              <postalCode>97301</postalCode>
                              <country>US</country>
                            </addr>
                          </representedOrganization>
                        </assignedAuthor>
                      </author>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" extension="2019-06-20" />
                          <code code="33999-4" codeSystem="2.16.840.1.113883.6.1" displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value code="55561003" codeSystem="2.16.840.1.113883.6.96" xsi:type="CD" displayName="Active" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.24.3.166" extension="2019-12-01" />
                          <code code="263486008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Rank" />
                          <value xsi:type="INT" value="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classClass="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-15123-concern" />
                  <code code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ" inversionInd="false">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-15123" />
                      <code code="282291009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT">
                        <translation code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                      </code>
                      <text>Long term (current) use of anticoagulants</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value code="711150003" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Long term (current) use of anticoagulants</originalText>
                        <translation code="Z79.01" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10" displayName="Long term (current) use of anticoagulants" />
                        <translation code="V58.61" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9" displayName="Long term (current) use of anticoagulants" />
                        <translation code="1673999" codeSystem="2.16.840.1.113883.3.247.1.1" codeSystemName="Intelligent Medical Objects ProblemIT" displayName="Long term (current) use of anticoagulants" />
                      </value>
                      <author>
                        <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                        <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                        <time value="20230727170907-0700" />
                        <assignedAuthor>
                          <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="284560664" />
                          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                          <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                            <originalText>Gastroenterology</originalText>
                            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                          </code>
                          <addr use="WP">
                            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                            <city>Salem</city>
                            <state>OR</state>
                            <postalCode>97301</postalCode>
                          </addr>
                          <telecom use="WP" value="tel:+1-503-399-7520" />
                          <telecom value="fax:+1-503-362-7344" />
                          <assignedPerson>
                            <name use="L">
                              <given>[REDACTED]</given>
                              <given>[REDACTED]</given>
                              <family>[REDACTED]</family>
                              <suffix qualifier="AC"> MD</suffix>
                              <validTime>
                                <low nullFlavor="UNK" />
                                <high nullFlavor="UNK" />
                              </validTime>
                            </name>
                          </assignedPerson>
                          <representedOrganization>
                            <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                            <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                            <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                            <name>Salem Health</name>
                            <addr use="WP">
                              <streetAddressLine nullFlavor="UNK" />
                              <city>Salem</city>
                              <state>OR</state>
                              <postalCode>97301</postalCode>
                              <country>US</country>
                            </addr>
                          </representedOrganization>
                        </assignedAuthor>
                      </author>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" extension="2019-06-20" />
                          <code code="33999-4" codeSystem="2.16.840.1.113883.6.1" displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value code="55561003" codeSystem="2.16.840.1.113883.6.96" xsi:type="CD" displayName="Active" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.24.3.166" extension="2019-12-01" />
                          <code code="263486008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Rank" />
                          <value xsi:type="INT" value="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classClass="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-1422360-concern" />
                  <code code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ" inversionInd="false">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-1422360" />
                      <code code="282291009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT">
                        <translation code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                      </code>
                      <text>History of recurrent deep vein thrombosis (DVT)</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value code="141911000119100" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>History of recurrent deep vein thrombosis (DVT)</originalText>
                        <translation code="Z86.718" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10" displayName="History of recurrent deep vein thrombosis (DVT)" />
                        <translation code="V12.51" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9" displayName="History of recurrent deep vein thrombosis (DVT)" />
                        <translation code="67049278" codeSystem="2.16.840.1.113883.3.247.1.1" codeSystemName="Intelligent Medical Objects ProblemIT" displayName="History of recurrent deep vein thrombosis (DVT)" />
                      </value>
                      <author>
                        <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                        <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                        <time value="20230727170950-0700" />
                        <assignedAuthor>
                          <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="284560664" />
                          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                          <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                            <originalText>Gastroenterology</originalText>
                            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                          </code>
                          <addr use="WP">
                            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                            <city>Salem</city>
                            <state>OR</state>
                            <postalCode>97301</postalCode>
                          </addr>
                          <telecom use="WP" value="tel:+1-503-399-7520" />
                          <telecom value="fax:+1-503-362-7344" />
                          <assignedPerson>
                            <name use="L">
                              <given>[REDACTED]</given>
                              <given>[REDACTED]</given>
                              <family>[REDACTED]</family>
                              <suffix qualifier="AC"> MD</suffix>
                              <validTime>
                                <low nullFlavor="UNK" />
                                <high nullFlavor="UNK" />
                              </validTime>
                            </name>
                          </assignedPerson>
                          <representedOrganization>
                            <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                            <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                            <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                            <name>Salem Health</name>
                            <addr use="WP">
                              <streetAddressLine nullFlavor="UNK" />
                              <city>Salem</city>
                              <state>OR</state>
                              <postalCode>97301</postalCode>
                              <country>US</country>
                            </addr>
                          </representedOrganization>
                        </assignedAuthor>
                      </author>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" extension="2019-06-20" />
                          <code code="33999-4" codeSystem="2.16.840.1.113883.6.1" displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value code="55561003" codeSystem="2.16.840.1.113883.6.96" xsi:type="CD" displayName="Active" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.24.3.166" extension="2019-12-01" />
                          <code code="263486008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Rank" />
                          <value xsi:type="INT" value="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classClass="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-155511-concern" />
                  <code code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ" inversionInd="false">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.1099.1" extension="89732096-155511" />
                      <code code="282291009" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT">
                        <translation code="29308-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Diagnosis" />
                      </code>
                      <text>Abdominal bloating</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value code="116289008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Abdominal bloating</originalText>
                        <translation code="R14.0" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10" displayName="Abdominal bloating" />
                        <translation code="787.3" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9" displayName="Abdominal bloating" />
                        <translation code="57950" codeSystem="2.16.840.1.113883.3.247.1.1" codeSystemName="Intelligent Medical Objects ProblemIT" displayName="Abdominal bloating" />
                      </value>
                      <author>
                        <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                        <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                        <time value="20230727171035-0700" />
                        <assignedAuthor>
                          <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="284560664" />
                          <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1100264" />
                          <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                          <code code="207RG0100X" codeSystem="2.16.840.1.113883.6.101" displayName="GASTROENTEROLOGY PHYSICIAN">
                            <originalText>Gastroenterology</originalText>
                            <translation code="20" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Gastroenterology" />
                            <translation code="10" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Gastroenterology" />
                          </code>
                          <addr use="WP">
                            <streetAddressLine>875 Oak St. SE #3010</streetAddressLine>
                            <city>Salem</city>
                            <state>OR</state>
                            <postalCode>97301</postalCode>
                          </addr>
                          <telecom use="WP" value="tel:+1-503-399-7520" />
                          <telecom value="fax:+1-503-362-7344" />
                          <assignedPerson>
                            <name use="L">
                              <given>[REDACTED]</given>
                              <given>[REDACTED]</given>
                              <family>[REDACTED]</family>
                              <suffix qualifier="AC"> MD</suffix>
                              <validTime>
                                <low nullFlavor="UNK" />
                                <high nullFlavor="UNK" />
                              </validTime>
                            </name>
                          </assignedPerson>
                          <representedOrganization>
                            <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                            <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                            <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                            <name>Salem Health</name>
                            <addr use="WP">
                              <streetAddressLine nullFlavor="UNK" />
                              <city>Salem</city>
                              <state>OR</state>
                              <postalCode>97301</postalCode>
                              <country>US</country>
                            </addr>
                          </representedOrganization>
                        </assignedAuthor>
                      </author>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" extension="2019-06-20" />
                          <code code="33999-4" codeSystem="2.16.840.1.113883.6.1" displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value code="55561003" codeSystem="2.16.840.1.113883.6.96" xsi:type="CD" displayName="Active" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                      <entryRelationship typeCode="REFR">
                        <observation classClass="OBS" moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.24.3.166" extension="2019-12-01" />
                          <code code="263486008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Rank" />
                          <value xsi:type="INT" value="0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
            </act>
          </entry>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.17" />
          <templateId root="2.16.840.1.113883.10.20.22.2.17" extension="2015-08-01" />
          <code code="29762-2" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Social history Narrative" />
          <title>Social History</title>
          <text>
            <table ID="sochist13">
              <colgroup>
                <col span="2" width="25%" />
                <col width="13%" />
                <col width="12%" />
                <col width="25%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Tobacco Use</th>
                  <th>Types</th>
                  <th>Packs/Day</th>
                  <th>Years Used</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smoking Tobacco: Former</td>
                  <td>Cigarettes</td>
                  <td ID="sochist13packsperday">[REDACTED]</td>
                  <td />
                  <td>Quit: 05/15/1991</td>
                </tr>
                <tr ID="sochist13smokeless" styleCode="xRowAlt">
                  <td>Smokeless Tobacco: Former</td>
                  <td>Chew</td>
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col span="2" width="25%" />
                <col width="50%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Alcohol Use</th>
                  <th>Standard Drinks/Week</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td ID="alcoholStatus">No</td>
                  <td>0 (1 standard drink = 0.6 oz pure alcohol)</td>
                  <td>quit 1994</td>
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col width="50%" />
                <col span="2" width="25%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Sex and Gender Information</th>
                  <th>Value</th>
                  <th>Date Recorded</th>
                </tr>
              </thead>
              <tbody>
                <tr ID="BirthSex17">
                  <td>Sex Assigned at Birth</td>
                  <td ID="BirthSex17Value">Not on file</td>
                  <td />
                </tr>
                <tr ID="GenderIdentity14">
                  <td>Gender Identity</td>
                  <td ID="GenderIdentity14Value">Not on file</td>
                  <td />
                </tr>
                <tr ID="SexualOrientation15">
                  <td>Sexual Orientation</td>
                  <td ID="SexualOrientation15Value">Not on file</td>
                  <td />
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col span="2" width="25%" />
                <col width="50%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Job Start Date</th>
                  <th>Occupation</th>
                  <th>Industry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Not on file</td>
                  <td ID="sochist18">Not on file</td>
                  <td ID="sochist19">Not on file</td>
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col width="50%" />
                <col span="2" width="25%" />
              </colgroup>
              <thead>
                <tr>
                  <th>COVID-19 Exposure</th>
                  <th>Response</th>
                  <th>Date Recorded</th>
                </tr>
              </thead>
              <tbody>
                <tr ID="COVID-19Exp16">
                  <td>In the last 10 days, have you been in contact with someone who was confirmed or suspected to have Coronavirus/COVID-19?</td>
                  <td ID="COVID-19Exp16Value">No / Unsure</td>
                  <td>5/31/2023 11:31 AM PDT</td>
                </tr>
              </tbody>
            </table>
            <footnote ID="subTitle12" styleCode="xSectionSubTitle">documented as of this encounter</footnote>
          </text>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.78" />
              <templateId root="2.16.840.1.113883.10.20.22.4.78" extension="2014-06-09" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.1" extension="Z511038^^72166-2" />
              <code code="72166-2" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Tobacco smoking status NHIS" />
              <text>
                <reference value="#sochist13" />
              </text>
              <statusCode code="completed" />
              <effectiveTime value="20221109" />
              <value code="8517006" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" displayName="Ex-smoker" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20221109" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="360149781" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1207568" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <code code="225100000X" codeSystem="2.16.840.1.113883.6.101" displayName="PHYSICAL THERAPY PHYSICAL THERAPIST">
                    <originalText>Physical Therapy</originalText>
                    <translation code="87" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Physical Therapy" />
                    <translation code="34" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Physical Therapy" />
                  </code>
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Bruce</given>
                      <given>C</given>
                      <family>Coy</family>
                      <suffix qualifier="AC"> PT</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20230719" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="359895567" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1206722" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Samantha</given>
                      <given>J</given>
                      <family>Spittal</family>
                      <suffix qualifier="AC"> RN</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.85" />
              <templateId root="2.16.840.1.113883.10.20.22.4.85" extension="2014-06-09" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.2" extension="Z511038^^77176002" />
              <code code="11367-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History of tobacco use" />
              <text>
                <reference value="#sochist13" />
              </text>
              <statusCode code="completed" />
              <effectiveTime>
                <low nullFlavor="UNK" />
                <high value="19910515" />
              </effectiveTime>
              <value code="77176002" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" displayName="Current smoker" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20221109" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="360149781" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1207568" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <code code="225100000X" codeSystem="2.16.840.1.113883.6.101" displayName="PHYSICAL THERAPY PHYSICAL THERAPIST">
                    <originalText>Physical Therapy</originalText>
                    <translation code="87" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Physical Therapy" />
                    <translation code="34" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Physical Therapy" />
                  </code>
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Bruce</given>
                      <given>C</given>
                      <family>Coy</family>
                      <suffix qualifier="AC"> PT</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20230719" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="359895567" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1206722" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Samantha</given>
                      <given>J</given>
                      <family>Spittal</family>
                      <suffix qualifier="AC"> RN</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.85" />
              <templateId root="2.16.840.1.113883.10.20.22.4.85" extension="2014-06-09" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.2" extension="Z511038^^65568007" />
              <code code="11367-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History of tobacco use" />
              <text>
                <reference value="#sochist13" />
              </text>
              <statusCode code="completed" />
              <effectiveTime>
                <low nullFlavor="UNK" />
                <high value="19910515" />
              </effectiveTime>
              <value code="65568007" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" displayName="Cigarette Smoker" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20221109" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="360149781" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1207568" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <code code="225100000X" codeSystem="2.16.840.1.113883.6.101" displayName="PHYSICAL THERAPY PHYSICAL THERAPIST">
                    <originalText>Physical Therapy</originalText>
                    <translation code="87" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Physical Therapy" />
                    <translation code="34" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Physical Therapy" />
                  </code>
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Bruce</given>
                      <given>C</given>
                      <family>Coy</family>
                      <suffix qualifier="AC"> PT</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20230719" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="359895567" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1206722" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Samantha</given>
                      <given>J</given>
                      <family>Spittal</family>
                      <suffix qualifier="AC"> RN</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.38" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2015-08-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.8" extension="Z511038^^713914004" />
              <code code="229819007" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED-CT" displayName="Tobacco use and exposure">
                <translation code="88031-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Smokeless tobacco status" />
              </code>
              <text>
                <reference value="#sochist13smokeless" />
              </text>
              <statusCode code="completed" />
              <effectiveTime value="20221109" />
              <value code="456711000124105" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" displayName="Former smokeless tobacco user" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20221109" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="360149781" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1207568" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <code code="225100000X" codeSystem="2.16.840.1.113883.6.101" displayName="PHYSICAL THERAPY PHYSICAL THERAPIST">
                    <originalText>Physical Therapy</originalText>
                    <translation code="87" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Physical Therapy" />
                    <translation code="34" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Physical Therapy" />
                  </code>
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Bruce</given>
                      <given>C</given>
                      <family>Coy</family>
                      <suffix qualifier="AC"> PT</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20230719" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="359895567" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1206722" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Samantha</given>
                      <given>J</given>
                      <family>Spittal</family>
                      <suffix qualifier="AC"> RN</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.85" />
              <templateId root="2.16.840.1.113883.10.20.22.4.85" extension="2014-06-09" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.2" extension="Z511038^^81703003" />
              <code code="11367-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History of tobacco use" />
              <text>
                <reference value="#sochist13" />
              </text>
              <statusCode code="completed" />
              <effectiveTime>
                <low nullFlavor="UNK" />
                <high nullFlavor="UNK" />
              </effectiveTime>
              <value code="81703003" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" displayName="Chews Tobacco" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20221109" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="360149781" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1207568" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <code code="225100000X" codeSystem="2.16.840.1.113883.6.101" displayName="PHYSICAL THERAPY PHYSICAL THERAPIST">
                    <originalText>Physical Therapy</originalText>
                    <translation code="87" codeSystem="1.2.840.114350.1.72.1.7.7.10.688867.4160" codeSystemName="Epic.DXC.StandardProviderSpecialtyType" displayName="Physical Therapy" />
                    <translation code="34" codeSystem="1.2.840.114350.1.13.144.2.7.10.836982.1050" codeSystemName="Epic.SER.ProviderSpecialty" displayName="Physical Therapy" />
                  </code>
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Bruce</given>
                      <given>C</given>
                      <family>Coy</family>
                      <suffix qualifier="AC"> PT</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20230719" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="359895567" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.836982" extension="1206722" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <addr nullFlavor="UNK" />
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Samantha</given>
                      <given>J</given>
                      <family>Spittal</family>
                      <suffix qualifier="AC"> RN</suffix>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.38" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2015-08-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.12" extension="Z511038^54843.94^160573003" />
              <code code="160573003" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Alcohol intake">
                <translation code="11331-6" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History of Alcohol Use" />
              </code>
              <statusCode code="completed" />
              <effectiveTime value="20230801" />
              <value code="105542008" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" xsi:type="CD" displayName="Current non-drinker of alcohol (finding)" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <originalText>
                  <reference value="#alcoholStatus" />
                </originalText>
              </value>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.38" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2015-08-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.13" extension="Z511038^54843.94^160573003" />
              <code code="160573003" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Alcohol intake">
                <translation code="74013-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Alcoholic drinks per day" />
              </code>
              <statusCode code="completed" />
              <effectiveTime value="20230801" />
              <value xsi:type="PQ" value="0" unit="/d" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.38" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2015-08-01" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2022-06-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.21" extension="5761884117-97003-Z511038" />
              <code code="8689-2" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History of Social function" />
              <statusCode code="completed" />
              <effectiveTime value="20230801" />
              <entryRelationship typeCode="SPRT">
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.69" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.69" extension="2022-06-01" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.83687972" extension="5761884117-97003-Z511038" />
                  <code code="88028-6" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Tobacco use panel">
                    <originalText>Patient History</originalText>
                  </code>
                  <text>
                    <reference nullFlavor="UNK" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801" />
                  <value xsi:type="CD" nullFlavor="UNK" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <interpretationCode nullFlavor="OTH">
                    <originalText>Medium Risk</originalText>
                    <translation code="X-SDOH-RISK-2" codeSystem="1.2.840.114350.1.72.1.8.1" codeSystemName="Epic.Sdoh" displayName="Medium Risk" />
                  </interpretationCode>
                  <entryRelationship typeCode="COMP">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.86" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.86" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.83687972" extension="cer97028-5761884117-97003-Z511038" />
                      <code code="72166-2" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Tobacco smoking status NHIS">
                        <originalText>Smoking Tobacco Use</originalText>
                        <translation code="266920004" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Trivial cigarette smoker (less than one cigarette/day) (finding)" />
                      </code>
                      <statusCode code="completed" />
                      <value code="LA15920-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" xsi:type="CD" displayName="Former smoker" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Former</originalText>
                        <translation code="405746006" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Current non smoker but past smoking history unknown (finding)" />
                      </value>
                    </observation>
                  </entryRelationship>
                  <entryRelationship typeCode="COMP">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.86" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.86" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.83687972" extension="cer97078-5761884117-97003-Z511038" />
                      <code code="88031-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Smokeless tobacco status">
                        <originalText>Smokeless Tobacco Use</originalText>
                      </code>
                      <statusCode code="completed" />
                      <value code="LA28393-9" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" xsi:type="CD" displayName="Former user" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Former</originalText>
                        <translation code="405746006" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Current non smoker but past smoking history unknown (finding)" />
                      </value>
                    </observation>
                  </entryRelationship>
                  <entryRelationship typeCode="COMP">
                    <observation classClass="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.86" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.86" extension="2022-06-01" />
                      <id root="1.2.840.114350.1.13.144.2.7.1.83687972" extension="cer97148-5761884117-97003-Z511038" />
                      <code nullFlavor="UNK">
                        <originalText>Passive Exposure</originalText>
                      </code>
                      <statusCode code="completed" />
                      <value xsi:type="CD" nullFlavor="OTH" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                        <originalText>Not on file</originalText>
                      </value>
                    </observation>
                  </entryRelationship>
                </observation>
              </entryRelationship>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="1.2.840.114350.1.72.5.1" />
              <id root="1.2.840.114350.1.13.144.2.7.7.698084.19222" extension="Z511038" />
              <code code="X-SDOH-19222" codeSystem="1.2.840.114350.1.72.1.8" codeSystemName="X-SDOH" displayName="Alcohol Comment" />
              <statusCode code="completed" />
              <effectiveTime value="20110120" />
              <value xsi:type="ST" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">quit 1994</value>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.200" extension="2016-06-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.1040.20" extension="Z511038" />
              <code code="76689-9" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Sex Assigned At Birth" />
              <text>
                <reference value="#BirthSex17" />
              </text>
              <statusCode code="completed" />
              <effectiveTime value="19530626" />
              <value codeSystem="2.16.840.1.113883.5.1" xsi:type="CD" nullFlavor="UNK" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <originalText>
                  <reference value="#BirthSex17Value" />
                </originalText>
              </value>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.34.3.45" extension="2022-06-01" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2015-08-01" />
              <id nullFlavor="UNK" />
              <code code="76691-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Gender identity" />
              <text>
                <reference value="#GenderIdentity14" />
              </text>
              <statusCode code="completed" />
              <effectiveTime nullFlavor="UNK" />
              <value xsi:type="CD" nullFlavor="UNK" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <originalText>
                  <reference value="#GenderIdentity14Value" />
                </originalText>
              </value>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.501" extension="2022-06-01" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2015-08-01" />
              <id nullFlavor="UNK" />
              <code code="76690-7" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Sexual orientation" />
              <text>
                <reference value="#SexualOrientation15" />
              </text>
              <statusCode code="completed" />
              <effectiveTime nullFlavor="UNK" />
              <value xsi:type="CD" nullFlavor="UNK" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <originalText>
                  <reference value="#SexualOrientation15Value" />
                </originalText>
              </value>
            </observation>
          </entry>
          <entry>
            <observation classClass="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.38" />
              <templateId root="2.16.840.1.113883.10.20.22.4.38" extension="2015-08-01" />
              <id nullFlavor="NI" />
              <code code="840546002" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Exposure to SARS-CoV-2 (event)">
                <translation codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" nullFlavor="OTH" />
              </code>
              <text>
                <reference value="#COVID-19Exp16" />
              </text>
              <statusCode code="completed" />
              <effectiveTime>
                <low value="20230521000000" />
                <high value="20230531113100" />
              </effectiveTime>
              <value code="LA12693-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" xsi:type="CD" displayName="Not sure" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <originalText>
                  <reference value="#COVID-19Exp16Value" />
                </originalText>
              </value>
              <author>
                <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                <time value="20230531113100-0700" />
                <assignedAuthor>
                  <id root="1.2.840.114350.1.13.144.2.7.1.1133" extension="751355248" />
                  <id root="1.2.840.114350.1.13.144.2.7.2.697780" extension="KJVITT" />
                  <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                  <addr use="WP">
                    <streetAddressLine nullFlavor="UNK" />
                    <city nullFlavor="UNK" />
                    <state nullFlavor="UNK" />
                    <postalCode>16805-9220</postalCode>
                  </addr>
                  <telecom nullFlavor="UNK" />
                  <assignedPerson>
                    <name use="L">
                      <given>Kristina</given>
                      <given>J</given>
                      <family>Vittone</family>
                      <validTime>
                        <low nullFlavor="UNK" />
                        <high nullFlavor="UNK" />
                      </validTime>
                    </name>
                  </assignedPerson>
                  <representedOrganization>
                    <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                    <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                    <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                    <name>Salem Health</name>
                    <addr use="WP">
                      <streetAddressLine nullFlavor="UNK" />
                      <city>Salem</city>
                      <state>OR</state>
                      <postalCode>97301</postalCode>
                      <country>US</country>
                    </addr>
                  </representedOrganization>
                </assignedAuthor>
              </author>
            </observation>
          </entry>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.4" />
          <templateId root="2.16.840.1.113883.10.20.22.2.4" extension="2015-08-01" />
          <code code="8716-3" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Vital signs" />
          <title>Last Filed Vital Signs</title>
          <text>
            <table>
              <colgroup>
                <col span="4" width="25%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Vital Sign</th>
                  <th>Reading</th>
                  <th>Time Taken</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr styleCode="xRowNormal">
                  <td styleCode="xcellHeader">Blood Pressure</td>
                  <td>
                    <content ID="sysBP_5761842300">116</content>/
                    <content ID="diaBP_5761842300">68</content>
                  </td>
                  <td>08/01/2023 4:45 PM PDT</td>
                  <td />
                </tr>
                <tr ID="pulse_5761842300" styleCode="xRowAlt">
                  <td styleCode="xcellHeader">Pulse</td>
                  <td>65</td>
                  <td>08/01/2023 4:45 PM PDT</td>
                  <td />
                </tr>
                <tr ID="temp_5761839900" styleCode="xRowNormal">
                  <td styleCode="xcellHeader">Temperature</td>
                  <td>36.5 °C (97.7 °F)</td>
                  <td>08/01/2023 4:05 PM PDT</td>
                  <td />
                </tr>
                <tr ID="resp_5761842300" styleCode="xRowAlt">
                  <td styleCode="xcellHeader">Respiratory Rate</td>
                  <td>17</td>
                  <td>08/01/2023 4:45 PM PDT</td>
                  <td />
                </tr>
                <tr ID="SpO2_5761842300" styleCode="xRowNormal">
                  <td styleCode="xcellHeader">Oxygen Saturation</td>
                  <td>100%</td>
                  <td>08/01/2023 4:45 PM PDT</td>
                  <td />
                </tr>
                <tr ID="inhaled_" styleCode="xRowAlt">
                  <td styleCode="xcellHeader">Inhaled Oxygen Concentration</td>
                  <td>-</td>
                  <td>-</td>
                  <td />
                </tr>
                <tr ID="weight_5761832340" styleCode="xRowNormal">
                  <td styleCode="xcellHeader">Weight</td>
                  <td>90.7 kg (200 lb)</td>
                  <td>08/01/2023 1:59 PM PDT</td>
                  <td />
                </tr>
                <tr ID="height_5761832340" styleCode="xRowAlt">
                  <td styleCode="xcellHeader">Height</td>
                  <td>137.2 cm (4' 6")</td>
                  <td>08/01/2023 1:59 PM PDT</td>
                  <td />
                </tr>
                <tr ID="bmi_5761832340" styleCode="xRowNormal">
                  <td styleCode="xcellHeader">Body Mass Index</td>
                  <td>48.22</td>
                  <td>08/01/2023 1:59 PM PDT</td>
                  <td />
                </tr>
              </tbody>
            </table>
            <footnote ID="subTitle20" styleCode="xSectionSubTitle">documented in this encounter</footnote>
          </text>
          <entry typeCode="DRIV">
            <organizer classClass="CLUSTER" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.26" />
              <templateId root="2.16.840.1.113883.10.20.22.4.26" extension="2015-08-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.2109" extension="5761832340-Z511038" />
              <code code="46680005" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Vital signs">
                <translation code="74728-7" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Vital signs, weight, height, head circumference, oximetry, BMI, and BSA panel HL7.CCDAr1.1" />
              </code>
              <statusCode code="completed" />
              <effectiveTime value="20230801205900+0000" />
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761832340-heightC83-Z511038" />
                  <code code="8302-2" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Body height</originalText>
                  </code>
                  <text>
                    <reference value="#height_5761832340" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801205900+0000" />
                  <value xsi:type="PQ" value="137.2" unit="cm" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801140011-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761832340-weightC83-Z511038" />
                  <code code="29463-7" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Body weight</originalText>
                  </code>
                  <text>
                    <reference value="#weight_5761832340" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801205900+0000" />
                  <value xsi:type="PQ" value="90.719" unit="kg" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801140011-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761832340-bmi-Z511038" />
                  <code code="39156-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>BMI</originalText>
                  </code>
                  <text>
                    <reference value="#bmi_5761832340" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801205900+0000" />
                  <value xsi:type="PQ" value="48.22" unit="kg/m2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801140011-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
            </organizer>
          </entry>
          <entry typeCode="DRIV">
            <organizer classClass="CLUSTER" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.26" />
              <templateId root="2.16.840.1.113883.10.20.22.4.26" extension="2015-08-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.2109" extension="5761839900-Z511038" />
              <code code="46680005" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Vital signs">
                <translation code="74728-7" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Vital signs, weight, height, head circumference, oximetry, BMI, and BSA panel HL7.CCDAr1.1" />
              </code>
              <statusCode code="completed" />
              <effectiveTime value="20230801230500+0000" />
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761839900-tempC83-Z511038" />
                  <code code="8310-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Body temperature</originalText>
                  </code>
                  <text>
                    <reference value="#temp_5761839900" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801230500+0000" />
                  <value xsi:type="PQ" value="36.5" unit="Cel" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801160704-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
            </organizer>
          </entry>
          <entry typeCode="DRIV">
            <organizer classClass="CLUSTER" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.26" />
              <templateId root="2.16.840.1.113883.10.20.22.4.26" extension="2015-08-01" />
              <id root="1.2.840.114350.1.13.144.2.7.1.2109" extension="5761842300-Z511038" />
              <code code="46680005" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED СТ" displayName="Vital signs">
                <translation code="74728-7" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Vital signs, weight, height, head circumference, oximetry, BMI, and BSA panel HL7.CCDAr1.1" />
              </code>
              <statusCode code="completed" />
              <effectiveTime value="20230801234500+0000" />
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761842300-sysBP-Z511038" />
                  <code code="8480-6" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Systolic blood pressure</originalText>
                  </code>
                  <text>
                    <reference value="#sysBP_5761842300" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801234500+0000" />
                  <value xsi:type="PQ" value="116" unit="mm[Hg]" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801164936-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761842300-diaBP-Z511038" />
                  <code code="8462-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Diastolic blood pressure</originalText>
                  </code>
                  <text>
                    <reference value="#diaBP_5761842300" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801234500+0000" />
                  <value xsi:type="PQ" value="68" unit="mm[Hg]" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801164936-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761842300-pulse-Z511038" />
                  <code code="8867-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Heart rate</originalText>
                  </code>
                  <text>
                    <reference value="#pulse_5761842300" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801234500+0000" />
                  <value xsi:type="PQ" value="65" unit="/min" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801164936-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761842300-resp-Z511038" />
                  <code code="9279-1" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Respiratory rate</originalText>
                  </code>
                  <text>
                    <reference value="#resp_5761842300" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801234500+0000" />
                  <value xsi:type="PQ" value="17" unit="/min" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801164936-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
              <component>
                <observation classClass="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.144.2.7.1.2109.1" extension="5761842300-SpO2-Z511038" />
                  <code code="59408-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC">
                    <originalText>Oxygen saturation in Arterial blood by Pulse oximetry</originalText>
                  </code>
                  <text>
                    <reference value="#SpO2_5761842300" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20230801234500+0000" />
                  <value xsi:type="PQ" value="100" unit="%" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                  <author>
                    <templateId root="2.16.840.1.113883.10.20.22.4.119" />
                    <templateId root="2.16.840.1.113883.10.20.22.5.6" extension="2019-10-01" />
                    <time value="20230801164936-0700" />
                    <assignedAuthor>
                      <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                      <addr nullFlavor="UNK" />
                      <telecom nullFlavor="UNK" />
                      <representedOrganization>
                        <id root="1.2.840.114350.1.13.144.2.7.2.688879" extension="9000" />
                        <id root="2.16.840.1.113883.4.2" nullFlavor="UNK" />
                        <id root="2.16.840.1.113883.4.6" nullFlavor="UNK" />
                        <name>Salem Health</name>
                        <addr use="WP">
                          <streetAddressLine nullFlavor="UNK" />
                          <city>Salem</city>
                          <state>OR</state>
                          <postalCode>97301</postalCode>
                          <country>US</country>
                        </addr>
                      </representedOrganization>
                    </assignedAuthor>
                  </author>
                </observation>
              </component>
            </organizer>
          </entry>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.11" />
          <templateId root="2.16.840.1.113883.10.20.22.2.11" extension="2015-08-01" />
          <templateId root="2.16.840.1.113883.10.20.22.2.11.1" />
          <templateId root="2.16.840.1.11