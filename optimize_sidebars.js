function docsLink(label, href) {
  return {
    type: "link",
    label: label,
    href: `/docs/next/${href}`,
  };
}

module.exports = {
  Components: [
    docsLink("Introduction to Components", "components/"),

    {
      Concepts: [
        docsLink(
          "What is Camunda 8?",
          "components/concepts/what-is-camunda-8/"
        ),
        docsLink("Clusters", "components/concepts/clusters/"),
        docsLink("Processes", "components/concepts/processes/"),
        docsLink("Job workers", "components/concepts/job-workers/"),
        docsLink(
          "Process instance creation",
          "components/concepts/process-instance-creation/"
        ),
        docsLink("Messages", "components/concepts/messages/"),
        docsLink("Signals", "components/concepts/signals/"),
        docsLink("Incidents", "components/concepts/incidents/"),
        docsLink("Variables", "components/concepts/variables/"),
        docsLink("Expressions", "components/concepts/expressions/"),
        docsLink("Workflow patterns", "components/concepts/workflow-patterns/"),
        docsLink(
          "Process instance modification",
          "components/concepts/process-instance-modification/"
        ),
        docsLink(
          "Process instance migration",
          "components/concepts/process-instance-migration/"
        ),
        docsLink("Data retention", "components/concepts/data-retention/"),
        docsLink(
          "Outbound Connectors vs. job workers",
          "components/concepts/outbound-connectors-job-workers/"
        ),
        docsLink("Backups", "components/concepts/backups/"),
        docsLink("Resource deletion", "components/concepts/resource-deletion/"),
        docsLink(
          "Resource authorizations",
          "components/concepts/resource-authorizations/"
        ),

        {
          "Access control": [
            docsLink(
              "User groups",
              "components/concepts/access-control/user-groups/"
            ),
            docsLink(
              "User task access restrictions",
              "components/concepts/access-control/user-task-access-restrictions/"
            ),
          ],
        },
      ],
    },

    {
      Console: [
        docsLink(
          "Introduction to Camunda Console",
          "components/console/introduction-to-console/"
        ),

        {
          "Manage your organization": [
            docsLink(
              "Organization management",
              "components/console/manage-organization/organization-settings/"
            ),
            docsLink(
              "Manage users of your organization",
              "components/console/manage-organization/manage-users/"
            ),
            docsLink(
              "View organization activity",
              "components/console/manage-organization/view-organization-activity/"
            ),
            docsLink(
              "Enable alpha features",
              "components/console/manage-organization/enable-alpha-features/"
            ),
            docsLink(
              "Usage history",
              "components/console/manage-organization/usage-history/"
            ),
            docsLink(
              "Usage alerts",
              "components/console/manage-organization/usage-alerts/"
            ),
            docsLink(
              "Advanced search",
              "components/console/manage-organization/advanced-search/"
            ),
            docsLink(
              "Switch organization",
              "components/console/manage-organization/switch-organization/"
            ),
            docsLink(
              "Connect your IdP with Camunda",
              "components/console/manage-organization/external-sso/"
            ),
            docsLink(
              "Delete your Camunda account",
              "components/console/manage-organization/delete-account/"
            ),
          ],
        },

        {
          "Manage clusters": [
            docsLink(
              "Create a cluster",
              "components/console/manage-clusters/create-cluster/"
            ),
            docsLink(
              "Rename your cluster",
              "components/console/manage-clusters/rename-cluster/"
            ),
            docsLink(
              "Resume your cluster",
              "components/console/manage-clusters/resume-cluster/"
            ),
            docsLink(
              "Update your cluster",
              "components/console/manage-clusters/update-cluster/"
            ),
            docsLink(
              "Delete your cluster",
              "components/console/manage-clusters/delete-cluster/"
            ),
            docsLink(
              "Manage API clients",
              "components/console/manage-clusters/manage-api-clients/"
            ),
            docsLink(
              "Manage alerts",
              "components/console/manage-clusters/manage-alerts/"
            ),
            docsLink(
              "Manage IP allowlists",
              "components/console/manage-clusters/manage-ip-allowlists/"
            ),
            docsLink(
              "Manage secrets",
              "components/console/manage-clusters/manage-secrets/"
            ),
            docsLink(
              "Settings",
              "components/console/manage-clusters/settings/"
            ),
          ],
        },

        {
          "Manage your plan": [
            docsLink(
              "Available plans",
              "components/console/manage-plan/available-plans/"
            ),
            docsLink(
              "Upgrade to a Starter plan",
              "components/console/manage-plan/upgrade-to-starter-plan/"
            ),
            docsLink(
              "Update billing reservations",
              "components/console/manage-plan/update-billing-reservations/"
            ),
            docsLink(
              "Update your credit card",
              "components/console/manage-plan/update-creditcard/"
            ),
            docsLink(
              "Retrieve invoices or update your billing information",
              "components/console/manage-plan/retrieve-invoices-or-update-billing-info/"
            ),
            docsLink(
              "Cancel Starter plan subscription",
              "components/console/manage-plan/cancel-starter-subscription/"
            ),
            docsLink(
              "Migrate from the Professional to the Starter plan",
              "components/console/manage-plan/migrate-from-prof-to-starter/"
            ),
          ],
        },

        {
          Troubleshooting: [
            docsLink(
              "Common pitfalls",
              "components/console/console-troubleshooting/common-pitfalls/"
            ),
          ],
        },
      ],
    },

    {
      Modeler: [
        {
          "Web Modeler": [
            docsLink(
              "Launch Web Modeler",
              "components/modeler/web-modeler/launch-web-modeler/"
            ),
            docsLink(
              "Model your first diagram",
              "components/modeler/web-modeler/model-your-first-diagram/"
            ),
            docsLink(
              "Context pad",
              "components/modeler/web-modeler/context-pad/"
            ),
            docsLink(
              "Import diagram",
              "components/modeler/web-modeler/import-diagram/"
            ),
            docsLink(
              "Fix problems in your diagram",
              "components/modeler/web-modeler/fix-problems-in-your-diagram/"
            ),
            docsLink(
              "Run or publish your process",
              "components/modeler/web-modeler/run-or-publish-your-process/"
            ),
            docsLink(
              "Process applications",
              "components/modeler/web-modeler/process-applications/"
            ),
            docsLink(
              "Visit the Camunda Marketplace",
              "components/modeler/web-modeler/camunda-marketplace/"
            ),
            {
              Collaboration: [
                docsLink(
                  "Collaborate with your team",
                  "components/modeler/web-modeler/collaboration/"
                ),
                docsLink(
                  "Collaborate with modes",
                  "components/modeler/web-modeler/collaborate-with-modes/"
                ),
                docsLink(
                  "Design mode for business users",
                  "components/modeler/web-modeler/design-your-process/"
                ),
                docsLink(
                  "Implement mode for developers",
                  "components/modeler/web-modeler/implement-your-process/"
                ),
                docsLink(
                  "Play mode for rapid validation",
                  "components/modeler/web-modeler/play-your-process/"
                ),
              ],
            },

            docsLink(
              "Milestones",
              "components/modeler/web-modeler/milestones/"
            ),
            docsLink(
              "Token simulation",
              "components/modeler/web-modeler/token-simulation/"
            ),

            {
              "Advanced modeling": [
                docsLink(
                  "Business rule task linking",
                  "components/modeler/web-modeler/advanced-modeling/business-rule-task-linking/"
                ),
                docsLink(
                  "Call activity linking",
                  "components/modeler/web-modeler/advanced-modeling/call-activity-linking/"
                ),
                docsLink(
                  "Form linking",
                  "components/modeler/web-modeler/advanced-modeling/form-linking/"
                ),
                docsLink(
                  "Publish processes via a form",
                  "components/modeler/web-modeler/advanced-modeling/publish-public-processes/"
                ),
                docsLink(
                  "Refactoring suggestions",
                  "components/modeler/web-modeler/advanced-modeling/refactoring-suggestions/"
                ),
              ],
            },

            docsLink(
              "File download",
              "components/modeler/web-modeler/file-download/"
            ),
          ],
        },

        {
          "Desktop Modeler": [
            docsLink(
              "Installation",
              "components/modeler/desktop-modeler/install-the-modeler/"
            ),
            docsLink(
              "Model your first diagram",
              "components/modeler/desktop-modeler/model-your-first-diagram/"
            ),
            docsLink(
              "Deploy your first diagram",
              "components/modeler/desktop-modeler/connect-to-camunda-8/"
            ),
            docsLink(
              "Start a new process instance",
              "components/modeler/desktop-modeler/start-instance/"
            ),

            {
              "Element templates": [
                docsLink(
                  "Configuring templates",
                  "components/modeler/desktop-modeler/element-templates/configuring-templates/"
                ),
                docsLink(
                  "Using templates",
                  "components/modeler/desktop-modeler/element-templates/using-templates/"
                ),
                docsLink(
                  "Defining templates",
                  "components/modeler/desktop-modeler/element-templates/defining-templates/"
                ),
                docsLink(
                  "Defining templates in Camunda 7",
                  "components/modeler/desktop-modeler/element-templates/c7-defining-templates/"
                ),
                docsLink(
                  "Additional resources",
                  "components/modeler/desktop-modeler/element-templates/additional-resources/"
                ),
              ],
            },

            {
              "Additional configuration": [
                docsLink("Flags", "components/modeler/desktop-modeler/flags/"),
                docsLink(
                  "Plugins",
                  "components/modeler/desktop-modeler/plugins/"
                ),
                docsLink(
                  "Custom lint rules",
                  "components/modeler/desktop-modeler/custom-lint-rules/"
                ),
                docsLink(
                  "Search paths",
                  "components/modeler/desktop-modeler/search-paths/"
                ),
                docsLink(
                  "Telemetry",
                  "components/modeler/desktop-modeler/telemetry/"
                ),
              ],
            },

            docsLink(
              "Troubleshooting",
              "components/modeler/desktop-modeler/troubleshooting/"
            ),
          ],
        },

        {
          BPMN: [
            docsLink("BPMN in Modeler", "components/modeler/bpmn/"),
            docsLink("BPMN primer", "components/modeler/bpmn/bpmn-primer/"),
            docsLink("BPMN coverage", "components/modeler/bpmn/bpmn-coverage/"),
            docsLink("Data flow", "components/modeler/bpmn/data-flow/"),

            {
              Tasks: [
                docsLink("Overview", "components/modeler/bpmn/tasks/"),
                docsLink(
                  "Service tasks",
                  "components/modeler/bpmn/service-tasks/"
                ),
                docsLink("User tasks", "components/modeler/bpmn/user-tasks/"),
                docsLink(
                  "Receive tasks",
                  "components/modeler/bpmn/receive-tasks/"
                ),
                docsLink(
                  "Business rule tasks",
                  "components/modeler/bpmn/business-rule-tasks/"
                ),
                docsLink(
                  "Script tasks",
                  "components/modeler/bpmn/script-tasks/"
                ),
                docsLink("Send tasks", "components/modeler/bpmn/send-tasks/"),
                docsLink(
                  "Manual tasks",
                  "components/modeler/bpmn/manual-tasks/"
                ),
                docsLink(
                  "Undefined tasks",
                  "components/modeler/bpmn/undefined-tasks/"
                ),
              ],
            },

            {
              Gateways: [
                docsLink("Overview", "components/modeler/bpmn/gateways/"),
                docsLink(
                  "Exclusive gateway",
                  "components/modeler/bpmn/exclusive-gateways/"
                ),
                docsLink(
                  "Parallel gateway",
                  "components/modeler/bpmn/parallel-gateways/"
                ),
                docsLink(
                  "Event-based gateway",
                  "components/modeler/bpmn/event-based-gateways/"
                ),
                docsLink(
                  "Inclusive gateway",
                  "components/modeler/bpmn/inclusive-gateways/"
                ),
              ],
            },

            {
              Events: [
                docsLink("Overview", "components/modeler/bpmn/events/"),
                docsLink("None events", "components/modeler/bpmn/none-events/"),
                docsLink(
                  "Message events",
                  "components/modeler/bpmn/message-events/"
                ),
                docsLink(
                  "Signal events",
                  "components/modeler/bpmn/signal-events/"
                ),
                docsLink(
                  "Timer events",
                  "components/modeler/bpmn/timer-events/"
                ),
                docsLink(
                  "Error events",
                  "components/modeler/bpmn/error-events/"
                ),
                docsLink(
                  "Escalation events",
                  "components/modeler/bpmn/escalation-events/"
                ),
                docsLink(
                  "Terminate events",
                  "components/modeler/bpmn/terminate-events/"
                ),
                docsLink("Link events", "components/modeler/bpmn/link-events/"),
                docsLink(
                  "Compensation events",
                  "components/modeler/bpmn/compensation-events/"
                ),
              ],
            },

            {
              Subprocesses: [
                docsLink("Overview", "components/modeler/bpmn/subprocesses/"),
                docsLink(
                  "Embedded subprocess",
                  "components/modeler/bpmn/embedded-subprocesses/"
                ),
                docsLink(
                  "Call activities",
                  "components/modeler/bpmn/call-activities/"
                ),
                docsLink(
                  "Event subprocess",
                  "components/modeler/bpmn/event-subprocesses/"
                ),
              ],
            },

            {
              Markers: [
                docsLink("Overview", "components/modeler/bpmn/markers/"),
                docsLink(
                  "Multi-instance",
                  "components/modeler/bpmn/multi-instance/"
                ),
                docsLink(
                  "Compensation",
                  "components/modeler/bpmn/compensation-handler/"
                ),
              ],
            },
          ],
        },

        {
          DMN: [
            docsLink("DMN in Modeler", "components/modeler/dmn/"),
            docsLink(
              "Decision requirements graph",
              "components/modeler/dmn/decision-requirements-graph/"
            ),

            {
              "Decision table": [
                docsLink("Overview", "components/modeler/dmn/decision-table/"),
                docsLink(
                  "Input",
                  "components/modeler/dmn/decision-table-input/"
                ),
                docsLink(
                  "Output",
                  "components/modeler/dmn/decision-table-output/"
                ),
                docsLink("Rule", "components/modeler/dmn/decision-table-rule/"),
                docsLink(
                  "Hit policy",
                  "components/modeler/dmn/decision-table-hit-policy/"
                ),
              ],
            },

            docsLink(
              "Decision literal expression",
              "components/modeler/dmn/decision-literal-expression/"
            ),
            docsLink("Data types", "components/modeler/dmn/dmn-data-types/"),
          ],
        },

        {
          "FEEL expressions": [
            docsLink("What is FEEL?", "components/modeler/feel/what-is-feel/"),
            docsLink(
              "Data types",
              "components/modeler/feel/language-guide/feel-data-types/"
            ),
            docsLink(
              "Unary-tests",
              "components/modeler/feel/language-guide/feel-unary-tests/"
            ),

            {
              Expressions: [
                docsLink(
                  "Introduction",
                  "components/modeler/feel/language-guide/feel-expressions-introduction/"
                ),
                docsLink(
                  "Boolean expressions",
                  "components/modeler/feel/language-guide/feel-boolean-expressions/"
                ),
                docsLink(
                  "String expressions",
                  "components/modeler/feel/language-guide/feel-string-expressions/"
                ),
                docsLink(
                  "Numeric expressions",
                  "components/modeler/feel/language-guide/feel-numeric-expressions/"
                ),
                docsLink(
                  "List expressions",
                  "components/modeler/feel/language-guide/feel-list-expressions/"
                ),
                docsLink(
                  "Context expressions",
                  "components/modeler/feel/language-guide/feel-context-expressions/"
                ),
                docsLink(
                  "Temporal expressions",
                  "components/modeler/feel/language-guide/feel-temporal-expressions/"
                ),
                docsLink(
                  "Variables",
                  "components/modeler/feel/language-guide/feel-variables/"
                ),
                docsLink(
                  "Control flow",
                  "components/modeler/feel/language-guide/feel-control-flow/"
                ),
                docsLink(
                  "Functions",
                  "components/modeler/feel/language-guide/feel-functions/"
                ),
                docsLink(
                  "Error handling",
                  "components/modeler/feel/language-guide/feel-error-handling/"
                ),
              ],
            },

            {
              "Built-in Functions": [
                docsLink(
                  "Introduction",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-introduction/"
                ),
                docsLink(
                  "Conversion functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-conversion/"
                ),
                docsLink(
                  "Boolean functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-boolean/"
                ),
                docsLink(
                  "String functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-string/"
                ),
                docsLink(
                  "Numeric functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-numeric/"
                ),
                docsLink(
                  "List functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-list/"
                ),
                docsLink(
                  "Context functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-context/"
                ),
                docsLink(
                  "Temporal functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-temporal/"
                ),
                docsLink(
                  "Range functions",
                  "components/modeler/feel/builtin-functions/feel-built-in-functions-range/"
                ),
              ],
            },
          ],
        },

        {
          "Camunda Forms": [
            docsLink(
              "What are Camunda Forms?",
              "components/modeler/forms/camunda-forms-reference/"
            ),

            {
              "Form Element Library": [
                docsLink(
                  "Overview of Form Elements",
                  "components/modeler/forms/form-element-library/forms-element-library/"
                ),
                docsLink(
                  "Text view",
                  "components/modeler/forms/form-element-library/forms-element-library-text/"
                ),
                docsLink(
                  "HTML view",
                  "components/modeler/forms/form-element-library/forms-element-library-html/"
                ),
                docsLink(
                  "Textfield",
                  "components/modeler/forms/form-element-library/forms-element-library-textfield/"
                ),
                docsLink(
                  "Text area",
                  "components/modeler/forms/form-element-library/forms-element-library-textarea/"
                ),
                docsLink(
                  "Number",
                  "components/modeler/forms/form-element-library/forms-element-library-number/"
                ),
                docsLink(
                  "Datetime",
                  "components/modeler/forms/form-element-library/forms-element-library-datetime/"
                ),
                docsLink(
                  "Checkbox",
                  "components/modeler/forms/form-element-library/forms-element-library-checkbox/"
                ),
                docsLink(
                  "Radio group",
                  "components/modeler/forms/form-element-library/forms-element-library-radio/"
                ),
                docsLink(
                  "Select",
                  "components/modeler/forms/form-element-library/forms-element-library-select/"
                ),
                docsLink(
                  "Checkbox group",
                  "components/modeler/forms/form-element-library/forms-element-library-checkbox-group/"
                ),
                docsLink(
                  "Taglist",
                  "components/modeler/forms/form-element-library/forms-element-library-taglist/"
                ),
                docsLink(
                  "Group",
                  "components/modeler/forms/form-element-library/forms-element-library-group/"
                ),
                docsLink(
                  "Dynamic list",
                  "components/modeler/forms/form-element-library/forms-element-library-dynamiclist/"
                ),
                docsLink(
                  "iframe",
                  "components/modeler/forms/form-element-library/forms-element-library-iframe/"
                ),
                docsLink(
                  "Table",
                  "components/modeler/forms/form-element-library/forms-element-library-table/"
                ),
                docsLink(
                  "Expression field",
                  "components/modeler/forms/form-element-library/forms-element-library-expression/"
                ),
                docsLink(
                  "Image view",
                  "components/modeler/forms/form-element-library/forms-element-library-image/"
                ),
                docsLink(
                  "Spacer",
                  "components/modeler/forms/form-element-library/forms-element-library-spacer/"
                ),
                docsLink(
                  "Separator",
                  "components/modeler/forms/form-element-library/forms-element-library-separator/"
                ),
                docsLink(
                  "Button",
                  "components/modeler/forms/form-element-library/forms-element-library-button/"
                ),
              ],
            },

            {
              Configuration: [
                docsLink(
                  "Data binding",
                  "components/modeler/forms/configuration/forms-config-data-binding/"
                ),
                docsLink(
                  "Options Source",
                  "components/modeler/forms/configuration/forms-config-options/"
                ),
                docsLink(
                  "Table data binding",
                  "components/modeler/forms/configuration/forms-config-table-data-binding/"
                ),
                docsLink(
                  "Templating syntax",
                  "components/modeler/forms/configuration/forms-config-templating-syntax/"
                ),
              ],
            },
          ],
        },

        docsLink("Data handling", "components/modeler/data-handling/"),

        {
          Reference: [
            {
              "Modeling guidance": [
                docsLink(
                  "Called element",
                  "components/modeler/reference/modeling-guidance/rules/called-element/"
                ),
                docsLink(
                  "Element type",
                  "components/modeler/reference/modeling-guidance/rules/element-type/"
                ),
                docsLink(
                  "Error reference",
                  "components/modeler/reference/modeling-guidance/rules/error-reference/"
                ),
                docsLink(
                  "Escalation reference",
                  "components/modeler/reference/modeling-guidance/rules/escalation-reference/"
                ),
                docsLink(
                  "FEEL",
                  "components/modeler/reference/modeling-guidance/rules/feel/"
                ),
                docsLink(
                  "History time to live",
                  "components/modeler/reference/modeling-guidance/rules/history-time-to-live/"
                ),
                docsLink(
                  "Message reference",
                  "components/modeler/reference/modeling-guidance/rules/message-reference/"
                ),
              ],
            },
          ],
        },
      ],
    },

    {
      Connectors: [
        docsLink(
          "Introduction",
          "components/connectors/introduction-to-connectors/"
        ),
        docsLink(
          "Types of Connectors",
          "components/connectors/connector-types/"
        ),

        {
          "Use Connectors": [
            docsLink(
              "Using Connectors",
              "components/connectors/use-connectors/"
            ),
            docsLink(
              "Using inbound Connectors",
              "components/connectors/use-connectors/inbound/"
            ),
            docsLink(
              "Using outbound Connectors",
              "components/connectors/use-connectors/outbound/"
            ),
          ],
        },

        {
          "Out-of-the-box Connectors": [
            docsLink(
              "Overview",
              "components/connectors/out-of-the-box-connectors/available-connectors-overview/"
            ),
            docsLink(
              "Asana Connector",
              "components/connectors/out-of-the-box-connectors/asana/"
            ),
            docsLink(
              "Automation Anywhere Connector",
              "components/connectors/out-of-the-box-connectors/automation-anywhere/"
            ),

            {
              AWS: [
                docsLink(
                  "AWS DynamoDB Connector",
                  "components/connectors/out-of-the-box-connectors/amazon-dynamodb/"
                ),
                docsLink(
                  "AWS EventBridge Connector",
                  "components/connectors/out-of-the-box-connectors/amazon-eventbridge/"
                ),
                docsLink(
                  "AWS Lambda Connector",
                  "components/connectors/out-of-the-box-connectors/aws-lambda/"
                ),
                docsLink(
                  "AWS SageMaker Connector",
                  "components/connectors/out-of-the-box-connectors/amazon-sagemaker/"
                ),
                docsLink(
                  "AWS SNS Connector",
                  "components/connectors/out-of-the-box-connectors/amazon-sns/"
                ),
                docsLink(
                  "AWS SQS Connector",
                  "components/connectors/out-of-the-box-connectors/amazon-sqs/"
                ),
              ],
            },

            docsLink(
              "Blue Prism Connector",
              "components/connectors/out-of-the-box-connectors/blueprism/"
            ),
            docsLink(
              "EasyPost Connector",
              "components/connectors/out-of-the-box-connectors/easy-post/"
            ),
            docsLink(
              "GitHub Connector",
              "components/connectors/out-of-the-box-connectors/github/"
            ),
            docsLink(
              "GitLab Connector",
              "components/connectors/out-of-the-box-connectors/gitlab/"
            ),

            {
              Google: [
                docsLink(
                  "Google Drive Connector",
                  "components/connectors/out-of-the-box-connectors/googledrive/"
                ),
                docsLink(
                  "Google Maps Platform Connector",
                  "components/connectors/out-of-the-box-connectors/google-maps-platform/"
                ),
                docsLink(
                  "Google Sheets Connector",
                  "components/connectors/out-of-the-box-connectors/google-sheets/"
                ),
              ],
            },

            docsLink(
              "Hugging Face Connector",
              "components/connectors/out-of-the-box-connectors/hugging-face/"
            ),

            docsLink(
              "Kafka Connector",
              "components/connectors/out-of-the-box-connectors/kafka/"
            ),

            {
              Microsoft: [
                docsLink(
                  "Azure OpenAI Connector",
                  "components/connectors/out-of-the-box-connectors/azure-open-ai/"
                ),
                docsLink(
                  "Microsoft Teams Connector",
                  "components/connectors/out-of-the-box-connectors/microsoft-teams/"
                ),
                docsLink(
                  "Microsoft 365 Connector",
                  "components/connectors/out-of-the-box-connectors/microsoft-o365-mail/"
                ),
              ],
            },

            docsLink(
              "OpenAI Connector",
              "components/connectors/out-of-the-box-connectors/openai/"
            ),
            docsLink(
              "Camunda Operate Connector",
              "components/connectors/out-of-the-box-connectors/operate/"
            ),
            docsLink(
              "RabbitMQ Connector",
              "components/connectors/out-of-the-box-connectors/rabbitmq/"
            ),
            docsLink(
              "Salesforce Connector",
              "components/connectors/out-of-the-box-connectors/salesforce/"
            ),
            docsLink(
              "Slack Connector",
              "components/connectors/out-of-the-box-connectors/slack/"
            ),
            docsLink(
              "SendGrid Connector",
              "components/connectors/out-of-the-box-connectors/sendgrid/"
            ),
            docsLink(
              "Twilio Connector",
              "components/connectors/out-of-the-box-connectors/twilio/"
            ),
            docsLink(
              "UiPath Connector",
              "components/connectors/out-of-the-box-connectors/uipath/"
            ),
            docsLink(
              "WhatsApp Connector",
              "components/connectors/out-of-the-box-connectors/whatsapp/"
            ),
          ],
        },

        {
          "Protocol Connectors": [
            docsLink(
              "GraphQL Connector",
              "components/connectors/protocol/graphql/"
            ),
            docsLink(
              "HTTP Webhook Connector",
              "components/connectors/protocol/http-webhook/"
            ),
            docsLink(
              "HTTP Polling Connector",
              "components/connectors/protocol/polling/"
            ),
            docsLink("REST Connector", "components/connectors/protocol/rest/"),
            docsLink("SOAP Connector", "components/connectors/protocol/soap/"),
          ],
        },

        docsLink(
          "Manage Connector templates",
          "components/connectors/manage-connector-templates/"
        ),

        {
          "Building custom Connectors": [
            docsLink(
              "Connector SDK",
              "components/connectors/custom-built-connectors/connector-sdk/"
            ),
            docsLink(
              "Connector templates",
              "components/connectors/custom-built-connectors/connector-templates/"
            ),

            {
              "Update guide": [
                docsLink(
                  "Connector SDK updates",
                  "components/connectors/custom-built-connectors/update-guide/introduction/"
                ),
                docsLink(
                  "Update 0.10 to 0.11",
                  "components/connectors/custom-built-connectors/update-guide/0100-to-0110/"
                ),
                docsLink(
                  "Update 0.9 to 0.10",
                  "components/connectors/custom-built-connectors/update-guide/090-to-0100/"
                ),
                docsLink(
                  "Update 0.8 to 0.9",
                  "components/connectors/custom-built-connectors/update-guide/080-to-090/"
                ),
                docsLink(
                  "Update 0.7 to 0.8",
                  "components/connectors/custom-built-connectors/update-guide/070-to-080/"
                ),
                docsLink(
                  "Update 0.6 to 0.7",
                  "components/connectors/custom-built-connectors/update-guide/060-to-070/"
                ),
                docsLink(
                  "Update 0.5 to 0.6",
                  "components/connectors/custom-built-connectors/update-guide/050-to-060/"
                ),
                docsLink(
                  "Update 0.4 to 0.5",
                  "components/connectors/custom-built-connectors/update-guide/040-to-050/"
                ),
                docsLink(
                  "Update 0.3 to 0.4",
                  "components/connectors/custom-built-connectors/update-guide/030-to-040/"
                ),
                docsLink(
                  "Update 0.2 to 0.3",
                  "components/connectors/custom-built-connectors/update-guide/020-to-030/"
                ),
                docsLink(
                  "Update 0.1 to 0.2",
                  "components/connectors/custom-built-connectors/update-guide/010-to-020/"
                ),
              ],
            },
          ],
        },
      ],
    },

    {
      Zeebe: [
        docsLink("Introduction", "components/zeebe/zeebe-overview/"),

        {
          "Technical concepts": [
            docsLink(
              "Overview",
              "components/zeebe/technical-concepts/technical-concepts-overview/"
            ),
            docsLink(
              "Architecture",
              "components/zeebe/technical-concepts/architecture/"
            ),
            docsLink(
              "Clustering",
              "components/zeebe/technical-concepts/clustering/"
            ),
            docsLink(
              "Partitions",
              "components/zeebe/technical-concepts/partitions/"
            ),
            docsLink(
              "Internal processing",
              "components/zeebe/technical-concepts/internal-processing/"
            ),
            docsLink(
              "Process lifecycles",
              "components/zeebe/technical-concepts/process-lifecycles/"
            ),
            docsLink(
              "Protocols",
              "components/zeebe/technical-concepts/protocols/"
            ),
          ],
        },
      ],
    },

    {
      Operate: [
        docsLink("Introduction", "components/operate/operate-introduction/"),

        {
          "User guide": [
            docsLink(
              "Getting familiar with Operate",
              "components/operate/userguide/basic-operate-navigation/"
            ),
            docsLink(
              "Variables and incidents",
              "components/operate/userguide/resolve-incidents-update-variables/"
            ),
            docsLink(
              "Selections and operations",
              "components/operate/userguide/selections-operations/"
            ),
            docsLink(
              "Delete finished instances",
              "components/operate/userguide/delete-finished-instances/"
            ),
            docsLink(
              "Delete resources",
              "components/operate/userguide/delete-resources/"
            ),
            docsLink(
              "Process instance modification",
              "components/operate/userguide/process-instance-modification/"
            ),
            docsLink(
              "Process instance migration",
              "components/operate/userguide/process-instance-migration/"
            ),
          ],
        },
      ],
    },

    {
      Tasklist: [
        docsLink(
          "Introduction",
          "components/tasklist/introduction-to-tasklist/"
        ),

        {
          "User guide": [
            docsLink(
              "Overview",
              "components/tasklist/userguide/using-tasklist/"
            ),
            docsLink(
              "Getting started",
              "components/tasklist/userguide/tasklist-get-started/"
            ),
            docsLink(
              "Using filters",
              "components/tasklist/userguide/using-filters/"
            ),
            docsLink(
              "Starting processes",
              "components/tasklist/userguide/starting-processes/"
            ),
          ],
        },
      ],
    },

    {
      Optimize: [
        "components/what-is-optimize",

        {
          "User guide": [
            "components/userguide/collections-dashboards-reports",
            "components/userguide/user-permissions",
            "components/userguide/data-sources",

            {
              Dashboards: [
                "components/userguide/creating-dashboards",
                "components/userguide/edit-mode",
                "components/userguide/view-mode",
              ],
            },
            {
              "Dashboards maintained by Camunda": [
                "components/userguide/process-dashboards",
                "components/userguide/instant-process-dashboards",
              ],
            },
            "components/userguide/creating-reports",
            "components/userguide/combined-process-reports",
            "components/userguide/process-KPIs",

            {
              "Process analysis": [
                "components/userguide/process-analysis/process-analysis-overview",
                "components/userguide/process-analysis/task-analysis",
                "components/userguide/process-analysis/branch-analysis",
                "components/userguide/process-analysis/user-task-analytics",
                {
                  "Report analysis": [
                    "components/userguide/process-analysis/report-analysis/overview",
                    {
                      "Edit mode": [
                        "components/userguide/process-analysis/report-analysis/edit-mode",
                        "components/userguide/process-analysis/report-analysis/select-process-definitions",
                        "components/userguide/process-analysis/report-analysis/define-reports",
                        "components/userguide/process-analysis/report-analysis/measures",
                        "components/userguide/process-analysis/report-analysis/compare-target-values",
                        "components/userguide/process-analysis/report-analysis/process-instance-parts",
                        "components/userguide/process-analysis/report-analysis/configure-reports",
                      ],
                    },

                    "components/userguide/process-analysis/report-analysis/view-mode",
                  ],
                },

                {
                  Filters: [
                    "components/userguide/process-analysis/filters",
                    "components/userguide/process-analysis/metadata-filters",
                    "components/userguide/process-analysis/instance-state-filters",
                    "components/userguide/process-analysis/flow-node-filters",
                    "components/userguide/process-analysis/process-instance-filters",
                    "components/userguide/process-analysis/variable-filters",
                  ],
                },
              ],
            },

            {
              "Decision analysis": [
                "components/userguide/decision-analysis/decision-analysis-overview",
                "components/userguide/decision-analysis/decision-report",
                "components/userguide/decision-analysis/decision-filter",
              ],
            },

            {
              "Additional features": [
                "components/userguide/additional-features/alerts",
                "components/userguide/additional-features/event-based-processes",
                "components/userguide/additional-features/export-import",
                "components/userguide/additional-features/footer",
                "components/userguide/additional-features/variable-labeling",
                "components/userguide/additional-features/process-variants-comparison",
                "components/userguide/additional-features/ml-dataset",
              ],
            },
          ],
        },
      ],
    },

    {
      "Best Practices": [
        docsLink(
          "Overview",
          "components/best-practices/best-practices-overview/"
        ),

        {
          "Project management": [
            docsLink(
              "Following the customer success path",
              "components/best-practices/management/following-the-customer-success-path/"
            ),
            docsLink(
              "Doing a proper POC",
              "components/best-practices/management/doing-a-proper-poc/"
            ),
          ],
        },

        {
          Architecture: [
            docsLink(
              "Deciding about your stack",
              "components/best-practices/architecture/deciding-about-your-stack/"
            ),
            docsLink(
              "Sizing your environment",
              "components/best-practices/architecture/sizing-your-environment/"
            ),
            docsLink(
              "Understanding human task management",
              "components/best-practices/architecture/understanding-human-tasks-management/"
            ),
          ],
        },

        {
          Development: [
            docsLink(
              "Connecting the workflow engine with your world",
              "components/best-practices/development/connecting-the-workflow-engine-with-your-world/"
            ),
            docsLink(
              "Service integration patterns with BPMN",
              "components/best-practices/development/service-integration-patterns/"
            ),
            docsLink(
              "Writing good workers",
              "components/best-practices/development/writing-good-workers/"
            ),
            docsLink(
              "Dealing with problems and exceptions",
              "components/best-practices/development/dealing-with-problems-and-exceptions/"
            ),
            docsLink(
              "Handling data in processes",
              "components/best-practices/development/handling-data-in-processes/"
            ),
            docsLink(
              "Routing events to processes",
              "components/best-practices/development/routing-events-to-processes/"
            ),
            docsLink(
              "Testing process definitions",
              "components/best-practices/development/testing-process-definitions/"
            ),
          ],
        },

        {
          Modeling: [
            docsLink(
              "Creating readable process models",
              "components/best-practices/modeling/creating-readable-process-models/"
            ),
            docsLink(
              "Naming BPMN elements",
              "components/best-practices/modeling/naming-bpmn-elements/"
            ),
            docsLink(
              "Naming technically relevant IDs",
              "components/best-practices/modeling/naming-technically-relevant-ids/"
            ),
            docsLink(
              "Modeling beyond the happy path",
              "components/best-practices/modeling/modeling-beyond-the-happy-path/"
            ),
            docsLink(
              "Modeling with situation patterns",
              "components/best-practices/modeling/modeling-with-situation-patterns/"
            ),
            docsLink(
              "Building flexibility into BPMN models",
              "components/best-practices/modeling/building-flexibility-into-bpmn-models/"
            ),
            docsLink(
              "Choosing the DMN hit policy",
              "components/best-practices/modeling/choosing-the-dmn-hit-policy/"
            ),
            docsLink(
              "Choosing the resource binding type",
              "components/best-practices/modeling/choosing-the-resource-binding-type/"
            ),
          ],
        },

        {
          Operations: [
            docsLink(
              "Versioning process definitions",
              "components/best-practices/operations/versioning-process-definitions/"
            ),
            docsLink(
              "Reporting about processes",
              "components/best-practices/operations/reporting-about-processes/"
            ),
          ],
        },

        {
          "Camunda 7 specific": [
            docsLink(
              "Deciding about your Camunda 7 stack",
              "components/best-practices/architecture/deciding-about-your-stack-c7/"
            ),
            docsLink(
              "Sizing your Camunda 7 environment",
              "components/best-practices/architecture/sizing-your-environment-c7/"
            ),
            docsLink(
              "Invoking services from a Camunda 7 process",
              "components/best-practices/development/invoking-services-from-the-process-c7/"
            ),
            docsLink(
              "Understanding Camunda 7 transaction handling",
              "components/best-practices/development/understanding-transaction-handling-c7/"
            ),
            docsLink(
              "Testing process definitions in Camunda 7",
              "components/best-practices/development/testing-process-definitions-c7/"
            ),
            docsLink(
              "Routing events to processes in Camunda 7",
              "components/best-practices/development/routing-events-to-processes-c7/"
            ),
            docsLink(
              "Operating Camunda 7",
              "components/best-practices/operations/operating-camunda-c7/"
            ),
            docsLink(
              "Performance tuning Camunda 7",
              "components/best-practices/operations/performance-tuning-camunda-c7/"
            ),
            docsLink(
              "Securing Camunda 7",
              "components/best-practices/operations/securing-camunda-c7/"
            ),
            docsLink(
              "Extending human task management in Camunda 7",
              "components/best-practices/architecture/extending-human-task-management-c7/"
            ),
          ],
        },
      ],
    },
  ],

  "APIs & Tools": [
    docsLink(
      "Working with APIs & tools",
      "apis-tools/working-with-apis-tools/"
    ),

    {
      APIs: [
        {
          "Administration API (REST)": [
            docsLink(
              "Overview",
              "apis-tools/administration-api/administration-api-reference/"
            ),
            docsLink(
              "Authentication",
              "apis-tools/administration-api/authentication/"
            ),
            docsLink("Tutorial", "apis-tools/administration-api/tutorial/"),
          ],
        },

        {
          "Operate API (REST)": [
            docsLink("Overview", "apis-tools/operate-api/overview/"),
            docsLink(
              "Authentication",
              "apis-tools/operate-api/operate-api-authentication/"
            ),
            docsLink("Tutorial", "apis-tools/operate-api/tutorial/"),

            {
              Specifications: [
                docsLink(
                  "Introduction",
                  "apis-tools/operate-api/specifications/operate-public-api/"
                ),

                {
                  ProcessDefinition: [
                    docsLink(
                      "Search process definitions",
                      "apis-tools/operate-api/specifications/search-2/"
                    ),
                    docsLink(
                      "Get process definition by key",
                      "apis-tools/operate-api/specifications/by-key-2/"
                    ),
                    docsLink(
                      "Get process definition as XML by key",
                      "apis-tools/operate-api/specifications/xml-by-key/"
                    ),
                  ],
                },

                {
                  DecisionDefinition: [
                    docsLink(
                      "Search decision definitions",
                      "apis-tools/operate-api/specifications/search-7/"
                    ),
                    docsLink(
                      "Get decision definition by key",
                      "apis-tools/operate-api/specifications/by-key-6/"
                    ),
                  ],
                },

                {
                  DecisionInstance: [
                    docsLink(
                      "Search decision instances",
                      "apis-tools/operate-api/specifications/search-6/"
                    ),
                    docsLink(
                      "Get decision instance by id",
                      "apis-tools/operate-api/specifications/by-id/"
                    ),
                  ],
                },

                {
                  FlownodeInstance: [
                    docsLink(
                      "Search flownode-instances",
                      "apis-tools/operate-api/specifications/search-4/"
                    ),
                    docsLink(
                      "Get flow node instance by key",
                      "apis-tools/operate-api/specifications/by-key-4/"
                    ),
                  ],
                },

                {
                  Variable: [
                    docsLink(
                      "Search variables for process instances",
                      "apis-tools/operate-api/specifications/search/"
                    ),
                    docsLink(
                      "Get variable by key",
                      "apis-tools/operate-api/specifications/by-key/"
                    ),
                  ],
                },

                {
                  ProcessInstance: [
                    docsLink(
                      "Search process instances",
                      "apis-tools/operate-api/specifications/search-1/"
                    ),
                    docsLink(
                      "Get process instance by key",
                      "apis-tools/operate-api/specifications/by-key-1/"
                    ),
                    docsLink(
                      "Delete process instance and all dependant data by key",
                      "apis-tools/operate-api/specifications/delete/"
                    ),
                    docsLink(
                      "Get flow node statistic by process instance id",
                      "apis-tools/operate-api/specifications/get-statistics/"
                    ),
                    docsLink(
                      "Get sequence flows of process instance by key",
                      "apis-tools/operate-api/specifications/sequence-flows-by-key/"
                    ),
                  ],
                },

                {
                  DecisionRequirements: [
                    docsLink(
                      "Search decision requirements",
                      "apis-tools/operate-api/specifications/search-5/"
                    ),
                    docsLink(
                      "Get decision requirements by key",
                      "apis-tools/operate-api/specifications/by-key-5/"
                    ),
                    docsLink(
                      "Get decision requirements as XML by key",
                      "apis-tools/operate-api/specifications/xml-by-key-1/"
                    ),
                  ],
                },

                {
                  Incident: [
                    docsLink(
                      "Search incidents",
                      "apis-tools/operate-api/specifications/search-3/"
                    ),
                    docsLink(
                      "Get incident by key",
                      "apis-tools/operate-api/specifications/by-key-3/"
                    ),
                  ],
                },
              ],
            },
          ],
        },

        {
          "Optimize API (REST)": [
            "apis-tools/optimize-api/overview",
            "apis-tools/optimize-api/optimize-api-authentication",
            "apis-tools/optimize-api/optimize-api-tutorial",
            {
              Configuration: [
                "apis-tools/optimize-api/configuration/enable-sharing",
                "apis-tools/optimize-api/configuration/disable-sharing",
              ],
            },

            {
              Dashboard: [
                "apis-tools/optimize-api/dashboard/get-dashboard-ids",
                "apis-tools/optimize-api/dashboard/delete-dashboard",
                "apis-tools/optimize-api/dashboard/export-dashboard-definitions",
              ],
            },

            {
              Report: [
                "apis-tools/optimize-api/report/get-report-ids",
                "apis-tools/optimize-api/report/delete-report",
                "apis-tools/optimize-api/report/export-report-definitions",
                "apis-tools/optimize-api/report/get-data-export",
              ],
            },
            "apis-tools/optimize-api/event-ingestion",
            "apis-tools/optimize-api/external-variable-ingestion",
            "apis-tools/optimize-api/health-readiness",
            "apis-tools/optimize-api/import-entities",
            "apis-tools/optimize-api/variable-labeling",
          ],
        },

        {
          "Tasklist API (REST)": [
            docsLink(
              "Overview",
              "apis-tools/tasklist-api-rest/tasklist-api-rest-overview/"
            ),
            docsLink(
              "Authentication",
              "apis-tools/tasklist-api-rest/tasklist-api-rest-authentication/"
            ),

            {
              Specifications: [
                docsLink(
                  "Introduction",
                  "apis-tools/tasklist-api-rest/specifications/tasklist-rest-api/"
                ),

                {
                  Form: [
                    docsLink(
                      "Get a form",
                      "apis-tools/tasklist-api-rest/specifications/get-form/"
                    ),
                  ],
                },

                {
                  Task: [
                    docsLink(
                      "Save draft variables",
                      "apis-tools/tasklist-api-rest/specifications/save-draft-task-variables/"
                    ),
                    docsLink(
                      "Search task variables",
                      "apis-tools/tasklist-api-rest/specifications/search-task-variables/"
                    ),
                    docsLink(
                      "Search tasks",
                      "apis-tools/tasklist-api-rest/specifications/search-tasks/"
                    ),
                    docsLink(
                      "Unassign a task",
                      "apis-tools/tasklist-api-rest/specifications/unassign-task/"
                    ),
                    docsLink(
                      "Complete a task",
                      "apis-tools/tasklist-api-rest/specifications/complete-task/"
                    ),
                    docsLink(
                      "Assign a task",
                      "apis-tools/tasklist-api-rest/specifications/assign-task/"
                    ),
                    docsLink(
                      "Get a task",
                      "apis-tools/tasklist-api-rest/specifications/get-task-by-id/"
                    ),
                  ],
                },

                {
                  Variables: [
                    docsLink(
                      "Get a variable",
                      "apis-tools/tasklist-api-rest/specifications/get-variable-by-id/"
                    ),
                  ],
                },
              ],
            },

            docsLink(
              "Migrate to Zeebe user tasks",
              "apis-tools/tasklist-api-rest/migrate-to-zeebe-user-tasks/"
            ),
          ],
        },

        {
          "Web Modeler API (REST)": [
            docsLink("Overview", "apis-tools/web-modeler-api/overview/"),
            docsLink(
              "Authentication",
              "apis-tools/web-modeler-api/authentication/"
            ),
          ],
        },

        {
          "Zeebe API (gRPC)": [
            docsLink("Overview", "apis-tools/zeebe-api/overview/"),
            docsLink("Zeebe API RPCs", "apis-tools/zeebe-api/gateway-service/"),
            docsLink(
              "Technical error handling",
              "apis-tools/zeebe-api/technical-error-handling/"
            ),
            docsLink(
              "Deprecated RPCs",
              "apis-tools/zeebe-api/deprecated-rpcs/"
            ),
          ],
        },

        {
          "Zeebe API (REST)": [
            docsLink(
              "Overview",
              "apis-tools/zeebe-api-rest/zeebe-api-rest-overview/"
            ),
            docsLink(
              "Authentication",
              "apis-tools/zeebe-api-rest/zeebe-api-rest-authentication/"
            ),

            {
              Specifications: [
                docsLink(
                  "Introduction",
                  "apis-tools/zeebe-api-rest/specifications/zeebe-rest-api/"
                ),

                {
                  Cluster: [
                    docsLink(
                      "Get cluster topology",
                      "apis-tools/zeebe-api-rest/specifications/get-cluster-topology/"
                    ),
                  ],
                },

                {
                  "User task": [
                    docsLink(
                      "Complete a user task",
                      "apis-tools/zeebe-api-rest/specifications/complete-a-user-task/"
                    ),
                    docsLink(
                      "Assign a user task",
                      "apis-tools/zeebe-api-rest/specifications/assign-a-user-task/"
                    ),
                    docsLink(
                      "Update a user task",
                      "apis-tools/zeebe-api-rest/specifications/update-a-user-task/"
                    ),
                    docsLink(
                      "Unassign a user task",
                      "apis-tools/zeebe-api-rest/specifications/unassign-a-user-task/"
                    ),
                  ],
                },
              ],
            },
          ],
        },

        {
          Deprecated: [
            {
              "Tasklist API (GraphQL)": [
                docsLink("Schema Documentation", "apis-tools/tasklist-api/"),
                docsLink(
                  "Overview",
                  "apis-tools/tasklist-api/tasklist-api-overview/"
                ),
                docsLink(
                  "Authentication",
                  "apis-tools/tasklist-api/tasklist-api-authentication/"
                ),
                docsLink(
                  "Tutorial",
                  "apis-tools/tasklist-api/tasklist-api-tutorial/"
                ),
                docsLink(
                  "GraphQL to REST API migration",
                  "apis-tools/tasklist-api/tasklist-api-graphql-to-rest-migration/"
                ),

                {
                  Directives: [
                    docsLink(
                      "deprecated",
                      "apis-tools/tasklist-api/directives/deprecated/"
                    ),
                    docsLink(
                      "include",
                      "apis-tools/tasklist-api/directives/include/"
                    ),
                    docsLink(
                      "skip",
                      "apis-tools/tasklist-api/directives/skip/"
                    ),
                    docsLink(
                      "specifiedBy",
                      "apis-tools/tasklist-api/directives/specified-by/"
                    ),
                  ],
                },

                {
                  Enums: [
                    docsLink("Sort", "apis-tools/tasklist-api/enums/sort/"),
                    docsLink(
                      "TaskSortFields",
                      "apis-tools/tasklist-api/enums/task-sort-fields/"
                    ),
                    docsLink(
                      "TaskState",
                      "apis-tools/tasklist-api/enums/task-state/"
                    ),
                  ],
                },

                {
                  Inputs: [
                    docsLink(
                      "DateFilter",
                      "apis-tools/tasklist-api/inputs/date-filter-input/"
                    ),
                    docsLink(
                      "TaskOrderBy",
                      "apis-tools/tasklist-api/inputs/task-order-by/"
                    ),
                    docsLink(
                      "TaskQuery",
                      "apis-tools/tasklist-api/inputs/task-query/"
                    ),
                    docsLink(
                      "VariableInput",
                      "apis-tools/tasklist-api/inputs/variable-input/"
                    ),
                  ],
                },

                {
                  Mutations: [
                    docsLink(
                      "claimTask",
                      "apis-tools/tasklist-api/mutations/claim-task/"
                    ),
                    docsLink(
                      "completeTask",
                      "apis-tools/tasklist-api/mutations/complete-task/"
                    ),
                    docsLink(
                      "deleteProcessInstance",
                      "apis-tools/tasklist-api/mutations/delete-process-instance/"
                    ),
                    docsLink(
                      "unclaimTask",
                      "apis-tools/tasklist-api/mutations/unclaim-task/"
                    ),
                  ],
                },

                {
                  Objects: [
                    docsLink("Form", "apis-tools/tasklist-api/objects/form/"),
                    docsLink("Task", "apis-tools/tasklist-api/objects/task/"),
                    docsLink("User", "apis-tools/tasklist-api/objects/user/"),
                    docsLink(
                      "Variable",
                      "apis-tools/tasklist-api/objects/variable/"
                    ),
                  ],
                },

                {
                  Queries: [
                    docsLink(
                      "currentUser",
                      "apis-tools/tasklist-api/queries/current-user/"
                    ),
                    docsLink("form", "apis-tools/tasklist-api/queries/form/"),
                    docsLink("task", "apis-tools/tasklist-api/queries/task/"),
                    docsLink("tasks", "apis-tools/tasklist-api/queries/tasks/"),
                    docsLink(
                      "variable",
                      "apis-tools/tasklist-api/queries/variable/"
                    ),
                    docsLink(
                      "variables",
                      "apis-tools/tasklist-api/queries/variables/"
                    ),
                  ],
                },

                {
                  Scalars: [
                    docsLink(
                      "DateTime",
                      "apis-tools/tasklist-api/scalars/datetime/"
                    ),
                    docsLink(
                      "Boolean",
                      "apis-tools/tasklist-api/scalars/boolean/"
                    ),
                    docsLink("ID", "apis-tools/tasklist-api/scalars/id/"),
                    docsLink("Int", "apis-tools/tasklist-api/scalars/int/"),
                    docsLink(
                      "String",
                      "apis-tools/tasklist-api/scalars/string/"
                    ),
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      Clients: [
        {
          "CLI client": [
            docsLink("Quick reference", "apis-tools/cli-client/"),
            docsLink(
              "Getting started with the CLI client",
              "apis-tools/cli-client/cli-get-started/"
            ),
          ],
        },

        {
          "Go client": [
            docsLink("Quick reference", "apis-tools/go-client/"),
            docsLink(
              "Getting started with the Go client",
              "apis-tools/go-client/go-get-started/"
            ),
            docsLink("Job worker", "apis-tools/go-client/job-worker/"),
          ],
        },

        {
          "Java client": [
            docsLink("Quick reference", "apis-tools/java-client/"),
            docsLink("Job worker", "apis-tools/java-client/job-worker/"),
            docsLink("Logging", "apis-tools/java-client/logging/"),
            docsLink(
              "Zeebe Process Test",
              "apis-tools/java-client/zeebe-process-test/"
            ),

            {
              Examples: [
                docsLink("Overview", "apis-tools/java-client-examples/"),
                docsLink(
                  "Deploy a process",
                  "apis-tools/java-client-examples/process-deploy/"
                ),
                docsLink(
                  "Create a process instance",
                  "apis-tools/java-client-examples/process-instance-create/"
                ),
                docsLink(
                  "Create non-blocking process instances",
                  "apis-tools/java-client-examples/process-instance-create-nonblocking/"
                ),
                docsLink(
                  "Create a process instance with results",
                  "apis-tools/java-client-examples/process-instance-create-with-result/"
                ),
                docsLink(
                  "Evaluate a decision",
                  "apis-tools/java-client-examples/decision-evaluate/"
                ),
                docsLink(
                  "Open a job worker",
                  "apis-tools/java-client-examples/job-worker-open/"
                ),
                docsLink(
                  "Handle variables as POJO",
                  "apis-tools/java-client-examples/data-pojo/"
                ),
                docsLink(
                  "Request cluster topology",
                  "apis-tools/java-client-examples/cluster-topology-request/"
                ),
              ],
            },
          ],
        },

        {
          "Community clients": [
            docsLink("Component clients", "apis-tools/community-clients/"),

            {
              "Zeebe clients": [
                docsLink("C#", "apis-tools/community-clients/c-sharp/"),
                docsLink(
                  "JavaScript/Node.js",
                  "apis-tools/community-clients/javascript/"
                ),
                docsLink(
                  "Micronaut",
                  "apis-tools/community-clients/micronaut/"
                ),
                docsLink("Python", "apis-tools/community-clients/python/"),
                docsLink("Ruby", "apis-tools/community-clients/ruby/"),
                docsLink("Rust", "apis-tools/community-clients/rust/"),
                docsLink("Spring", "apis-tools/community-clients/spring/"),
                docsLink("Quarkus", "apis-tools/community-clients/quarkus/"),
              ],
            },
          ],
        },

        docsLink("Build your own client", "apis-tools/build-your-own-client/"),
      ],
    },

    {
      SDKs: [
        docsLink("Node.js", "apis-tools/node-js-sdk/"),

        {
          "Spring Zeebe": [
            docsLink(
              "Getting started",
              "apis-tools/spring-zeebe-sdk/getting-started/"
            ),
            docsLink(
              "Configuration",
              "apis-tools/spring-zeebe-sdk/configuration/"
            ),
          ],
        },
      ],
    },

    {
      "Frontend development": [
        {
          "Task applications": [
            docsLink(
              "Introduction to task applications",
              "apis-tools/frontend-development/task-applications/introduction-to-task-applications/"
            ),
            docsLink(
              "User task life cycle",
              "apis-tools/frontend-development/task-applications/user-task-lifecycle/"
            ),
            docsLink(
              "Task application architecture",
              "apis-tools/frontend-development/task-applications/task-application-architecture/"
            ),
          ],
        },

        {
          Forms: [
            docsLink(
              "Introduction to forms",
              "apis-tools/frontend-development/forms/introduction-to-forms/"
            ),

            {
              "Embed forms": [
                docsLink(
                  "Concepts",
                  "apis-tools/frontend-development/forms/embed-forms/form-js-concepts/"
                ),
                docsLink(
                  "Embed forms in JavaScript",
                  "apis-tools/frontend-development/forms/embed-forms/embed-forms-in-javascript/"
                ),
              ],
            },

            {
              "Customize & extend": [
                docsLink(
                  "Styling",
                  "apis-tools/frontend-development/forms/customize-and-extend/form-styling/"
                ),
                docsLink(
                  "Custom components",
                  "apis-tools/frontend-development/forms/customize-and-extend/custom-components/"
                ),
                docsLink(
                  "Integrate API data",
                  "apis-tools/frontend-development/forms/customize-and-extend/integrate-api-data/"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],

  "Self-Managed": [
    docsLink("Camunda 8 Self-Managed", "self-managed/about-self-managed/"),
    {
      Setup: [
        docsLink("Overview", "self-managed/setup/overview/"),
        docsLink("Install", "self-managed/setup/install/"),
        docsLink("Upgrade", "self-managed/setup/upgrade/"),

        {
          Deploy: [
            {
              Local: [
                docsLink(
                  "Local Kubernetes cluster",
                  "self-managed/setup/deploy/local/local-kubernetes-cluster/"
                ),
                docsLink(
                  "Docker Compose",
                  "self-managed/setup/deploy/local/docker-compose/"
                ),
                docsLink("Manual", "self-managed/setup/deploy/local/manual/"),
              ],
            },

            {
              "Amazon (AWS)": [
                {
                  "Amazon EKS": [
                    docsLink(
                      "Deploy an EKS cluster with eksctl",
                      "self-managed/setup/deploy/amazon/amazon-eks/eks-eksctl/"
                    ),
                    docsLink(
                      "Deploy an EKS cluster with Terraform",
                      "self-managed/setup/deploy/amazon/amazon-eks/eks-terraform/"
                    ),
                    docsLink(
                      "Install Camunda 8 on an EKS cluster",
                      "self-managed/setup/deploy/amazon/amazon-eks/eks-helm/"
                    ),
                    docsLink(
                      "Dual-region setup",
                      "self-managed/setup/deploy/amazon/amazon-eks/dual-region/"
                    ),
                    docsLink(
                      "IAM roles for service accounts",
                      "self-managed/setup/deploy/amazon/amazon-eks/irsa/"
                    ),
                  ],
                },

                docsLink(
                  "Install AWS Marketplace",
                  "self-managed/setup/deploy/amazon/aws-marketplace/"
                ),
              ],
            },

            {
              "Microsoft (Azure)": [
                docsLink(
                  "Microsoft AKS",
                  "self-managed/setup/deploy/azure/microsoft-aks/"
                ),
              ],
            },

            {
              "Google (GCP)": [
                docsLink(
                  "Google GKE",
                  "self-managed/setup/deploy/gcp/google-gke/"
                ),
              ],
            },

            {
              "Red Hat (OpenShift)": [
                docsLink(
                  "Red Hat OpenShift",
                  "self-managed/setup/deploy/openshift/redhat-openshift/"
                ),
              ],
            },

            {
              Other: [
                docsLink("Docker", "self-managed/setup/deploy/other/docker/"),
                docsLink("Manual", "self-managed/setup/deploy/local/manual/"),
              ],
            },
          ],
        },

        {
          Guides: [
            docsLink(
              "Accessing components without Ingress",
              "self-managed/setup/guides/accessing-components-without-ingress/"
            ),
            docsLink(
              "Combined and separated Ingress setup",
              "self-managed/setup/guides/ingress-setup/"
            ),
            docsLink(
              "Using existing Keycloak",
              "self-managed/setup/guides/using-existing-keycloak/"
            ),
            docsLink(
              "Using existing Elasticsearch",
              "self-managed/setup/guides/using-existing-elasticsearch/"
            ),
            docsLink(
              "Using AWS managed OpenSearch",
              "self-managed/setup/guides/using-existing-opensearch/"
            ),
            docsLink(
              "Connect to an OpenID Connect provider",
              "self-managed/setup/guides/connect-to-an-oidc-provider/"
            ),
            docsLink(
              "Installing in an air-gapped environment",
              "self-managed/setup/guides/air-gapped-installation/"
            ),
            docsLink(
              "Running custom Connectors",
              "self-managed/setup/guides/running-custom-connectors/"
            ),
            docsLink(
              "Multi-namespace deployment",
              "self-managed/setup/guides/multi-namespace-deployment/"
            ),
            docsLink(
              "Verifying Camunda 8 installation with a demo app",
              "self-managed/setup/guides/installing-payment-app-example/"
            ),
          ],
        },
      ],
    },

    {
      "Operational guides": [
        {
          "Update guide": [
            docsLink(
              "Update 8.5 to 8.6",
              "self-managed/operational-guides/update-guide/850-to-860/"
            ),
            docsLink(
              "Update 8.4 to 8.5",
              "self-managed/operational-guides/update-guide/840-to-850/"
            ),
            docsLink(
              "Update 8.3 to 8.4",
              "self-managed/operational-guides/update-guide/830-to-840/"
            ),
            docsLink(
              "Update 8.2 to 8.3",
              "self-managed/operational-guides/update-guide/820-to-830/"
            ),
            docsLink(
              "Update 8.1 to 8.2",
              "self-managed/operational-guides/update-guide/810-to-820/"
            ),
            docsLink(
              "Update 8.0 to 8.1",
              "self-managed/operational-guides/update-guide/800-to-810/"
            ),
            docsLink(
              "Update 1.3 to 8.0",
              "self-managed/operational-guides/update-guide/130-to-800/"
            ),

            {
              Elasticsearch: [
                docsLink(
                  "Update 7 to 8",
                  "self-managed/operational-guides/update-guide/elasticsearch/7-to-8/"
                ),
              ],
            },

            {
              Keycloak: [
                docsLink(
                  "Update Keycloak",
                  "self-managed/operational-guides/update-guide/keycloak/keycloak-update/"
                ),
              ],
            },
          ],
        },

        docsLink(
          "Configure multi-tenancy",
          "self-managed/operational-guides/configure-multi-tenancy/"
        ),

        {
          "Backup and restore": [
            docsLink(
              "Backup and restore Optimize data",
              "self-managed/operational-guides/backup-restore/optimize-backup/"
            ),
            docsLink(
              "Backup and restore Operate and Tasklist data",
              "self-managed/operational-guides/backup-restore/operate-tasklist-backup/"
            ),
            docsLink(
              "Backup and restore Zeebe data",
              "self-managed/operational-guides/backup-restore/zeebe-backup-and-restore/"
            ),
            docsLink(
              "Backup and restore Web Modeler data",
              "self-managed/operational-guides/backup-restore/modeler-backup-and-restore/"
            ),
          ],
        },

        docsLink(
          "Configure components",
          "self-managed/operational-guides/application-configs/"
        ),

        {
          "Multi-region": [
            docsLink(
              "Dual-region operational procedure",
              "self-managed/operational-guides/multi-region/dual-region-operational-procedure/"
            ),
          ],
        },

        {
          Troubleshooting: [
            docsLink(
              "Troubleshooting",
              "self-managed/operational-guides/troubleshooting/"
            ),
            docsLink(
              "Log levels",
              "self-managed/operational-guides/troubleshooting/log-levels/"
            ),
          ],
        },
      ],
    },

    {
      Concepts: [
        {
          "Access control": [
            docsLink(
              "Applications",
              "self-managed/concepts/access-control/applications/"
            ),
            docsLink(
              "Resource authorizations",
              "self-managed/concepts/access-control/resource-authorizations/"
            ),
            docsLink(
              "User task access restrictions",
              "self-managed/concepts/access-control/user-task-access-restrictions/"
            ),
          ],
        },

        docsLink("Exporters", "self-managed/concepts/exporters/"),

        {
          "Multi-region": [
            docsLink(
              "Dual-region",
              "self-managed/concepts/multi-region/dual-region/"
            ),
          ],
        },

        docsLink("Multi-tenancy", "self-managed/concepts/multi-tenancy/"),
        docsLink("Mapping rules", "self-managed/concepts/mapping-rules/"),
        docsLink(
          "Elasticsearch privileges",
          "self-managed/concepts/elasticsearch-privileges/"
        ),
        docsLink(
          "OpenSearch privileges",
          "self-managed/concepts/opensearch-privileges/"
        ),
      ],
    },

    {
      Components: [
        {
          Console: [
            docsLink("Overview", "self-managed/console-deployment/overview/"),
            docsLink(
              "Installation",
              "self-managed/console-deployment/installation/"
            ),
            docsLink(
              "Configuration",
              "self-managed/console-deployment/configuration/"
            ),
            docsLink("Telemetry", "self-managed/console-deployment/telemetry/"),
          ],
        },

        {
          Zeebe: [
            docsLink(
              "Overview",
              "self-managed/zeebe-deployment/zeebe-installation/"
            ),

            {
              "Zeebe Gateway": [
                docsLink(
                  "Overview",
                  "self-managed/zeebe-deployment/zeebe-gateway/overview/"
                ),
                docsLink(
                  "Interceptors",
                  "self-managed/zeebe-deployment/zeebe-gateway/interceptors/"
                ),
              ],
            },

            {
              Configuration: [
                docsLink(
                  "Overview",
                  "self-managed/zeebe-deployment/configuration/"
                ),
                docsLink(
                  "Logging",
                  "self-managed/zeebe-deployment/configuration/logging/"
                ),
                docsLink(
                  "Gateway health probes",
                  "self-managed/zeebe-deployment/configuration/gateway-health-probes/"
                ),
                docsLink(
                  "Environment variables",
                  "self-managed/zeebe-deployment/configuration/environment-variables/"
                ),
                docsLink(
                  "Fixed partitioning",
                  "self-managed/zeebe-deployment/configuration/fixed-partitioning/"
                ),
                docsLink(
                  "Priority election",
                  "self-managed/zeebe-deployment/configuration/priority-election/"
                ),
                docsLink(
                  "Broker configuration",
                  "self-managed/zeebe-deployment/configuration/broker-config/"
                ),
                docsLink(
                  "Gateway configuration",
                  "self-managed/zeebe-deployment/configuration/gateway-config/"
                ),
              ],
            },

            {
              Security: [
                docsLink("Overview", "self-managed/zeebe-deployment/security/"),
                docsLink(
                  "Client authorization",
                  "self-managed/zeebe-deployment/security/client-authorization/"
                ),
                docsLink(
                  "Secure client communication",
                  "self-managed/zeebe-deployment/security/secure-client-communication/"
                ),
                docsLink(
                  "Secure cluster communication",
                  "self-managed/zeebe-deployment/security/secure-cluster-communication/"
                ),
              ],
            },

            {
              Operation: [
                docsLink(
                  "Overview",
                  "self-managed/zeebe-deployment/operations/zeebe-in-production/"
                ),
                docsLink(
                  "Resource planning",
                  "self-managed/zeebe-deployment/operations/resource-planning/"
                ),
                docsLink(
                  "Network ports",
                  "self-managed/zeebe-deployment/operations/network-ports/"
                ),
                docsLink(
                  "Setting up a Zeebe cluster",
                  "self-managed/zeebe-deployment/operations/setting-up-a-cluster/"
                ),
                docsLink(
                  "Metrics",
                  "self-managed/zeebe-deployment/operations/metrics/"
                ),
                docsLink(
                  "Health status",
                  "self-managed/zeebe-deployment/operations/health/"
                ),
                docsLink(
                  "Backpressure",
                  "self-managed/zeebe-deployment/operations/backpressure/"
                ),
                docsLink(
                  "Disk space",
                  "self-managed/zeebe-deployment/operations/disk-space/"
                ),
                docsLink(
                  "Update Zeebe",
                  "self-managed/zeebe-deployment/operations/update-zeebe/"
                ),
                docsLink(
                  "Rebalancing",
                  "self-managed/zeebe-deployment/operations/rebalancing/"
                ),
                docsLink(
                  "Management API",
                  "self-managed/zeebe-deployment/operations/management-api/"
                ),
                docsLink(
                  "Backups",
                  "self-managed/zeebe-deployment/operations/backups/"
                ),
                docsLink(
                  "Cluster scaling",
                  "self-managed/zeebe-deployment/operations/cluster-scaling/"
                ),
              ],
            },

            {
              Exporters: [
                docsLink(
                  "Install Zeebe exporters",
                  "self-managed/zeebe-deployment/exporters/install-zeebe-exporters/"
                ),
                docsLink(
                  "Elasticsearch",
                  "self-managed/zeebe-deployment/exporters/elasticsearch-exporter/"
                ),
                docsLink(
                  "OpenSearch",
                  "self-managed/zeebe-deployment/exporters/opensearch-exporter/"
                ),
              ],
            },
          ],
        },

        {
          Operate: [
            docsLink(
              "Installation",
              "self-managed/operate-deployment/install-and-start/"
            ),
            docsLink(
              "Configuration",
              "self-managed/operate-deployment/operate-configuration/"
            ),
            docsLink(
              "Data retention",
              "self-managed/operate-deployment/data-retention/"
            ),
            docsLink(
              "Schema and migration",
              "self-managed/operate-deployment/schema-and-migration/"
            ),
            docsLink(
              "Importer and archiver",
              "self-managed/operate-deployment/importer-and-archiver/"
            ),
            docsLink(
              "Authentication and authorization",
              "self-managed/operate-deployment/operate-authentication/"
            ),
            docsLink(
              "Usage metrics",
              "self-managed/operate-deployment/usage-metrics/"
            ),
          ],
        },

        {
          Tasklist: [
            docsLink(
              "Installation",
              "self-managed/tasklist-deployment/install-and-start/"
            ),
            docsLink(
              "Configuration",
              "self-managed/tasklist-deployment/tasklist-configuration/"
            ),
            docsLink(
              "Data retention",
              "self-managed/tasklist-deployment/data-retention/"
            ),
            docsLink(
              "Importer and archiver",
              "self-managed/tasklist-deployment/importer-and-archiver/"
            ),
            docsLink(
              "Authentication",
              "self-managed/tasklist-deployment/tasklist-authentication/"
            ),
            docsLink(
              "Usage metrics",
              "self-managed/tasklist-deployment/usage-metrics/"
            ),
          ],
        },

        {
          Connectors: [
            docsLink(
              "Installation",
              "self-managed/connectors-deployment/install-and-start/"
            ),
            docsLink(
              "Configuration",
              "self-managed/connectors-deployment/connectors-configuration/"
            ),
          ],
        },

        {
          Optimize: [
            "self-managed/optimize-deployment/install-and-start",
            "self-managed/optimize-deployment/version-policy",
            {
              Configuration: [
                "self-managed/optimize-deployment/configuration/getting-started",
                {
                  "System configuration": [
                    "self-managed/optimize-deployment/configuration/system-configuration",
                    "self-managed/optimize-deployment/configuration/system-configuration-platform-8",
                    "self-managed/optimize-deployment/configuration/system-configuration-platform-7",
                    "self-managed/optimize-deployment/configuration/event-based-process-configuration",
                  ],
                },
                "self-managed/optimize-deployment/configuration/logging",
                "self-managed/optimize-deployment/configuration/optimize-license",
                "self-managed/optimize-deployment/configuration/security-instructions",
                "self-managed/optimize-deployment/configuration/shared-elasticsearch-cluster",
                "self-managed/optimize-deployment/configuration/history-cleanup",
                "self-managed/optimize-deployment/configuration/localization",
                "self-managed/optimize-deployment/configuration/object-variables",
                "self-managed/optimize-deployment/configuration/clustering",
                "self-managed/optimize-deployment/configuration/webhooks",
                "self-managed/optimize-deployment/configuration/authorization-management",
                "self-managed/optimize-deployment/configuration/user-management",
                "self-managed/optimize-deployment/configuration/multi-tenancy",
                "self-managed/optimize-deployment/configuration/multiple-engines",
                "self-managed/optimize-deployment/configuration/setup-event-based-processes",
                "self-managed/optimize-deployment/configuration/common-problems",
              ],
            },

            {
              Plugins: [
                "self-managed/optimize-deployment/plugins/plugin-system",
                "self-managed/optimize-deployment/plugins/businesskey-import-plugin",
                "self-managed/optimize-deployment/plugins/decision-import-plugin",
                "self-managed/optimize-deployment/plugins/elasticsearch-header",
                "self-managed/optimize-deployment/plugins/engine-rest-filter-plugin",
                "self-managed/optimize-deployment/plugins/single-sign-on",
                "self-managed/optimize-deployment/plugins/variable-import-plugin",
              ],
            },
            "self-managed/optimize-deployment/reimport",
            {
              "Migration & update": [
                "self-managed/optimize-deployment/migration-update/instructions",
                "self-managed/optimize-deployment/migration-update/3.12_8.4-to-3.13_8.5",
                "self-managed/optimize-deployment/migration-update/3.11_8.3-to-3.12_8.4",
                "self-managed/optimize-deployment/migration-update/3.10-to-3.11_8.3",
                "self-managed/optimize-deployment/migration-update/3.9-to-3.10",
                "self-managed/optimize-deployment/migration-update/3.9-preview-1-to-3.9",
                "self-managed/optimize-deployment/migration-update/3.8-to-3.9-preview-1",
                "self-managed/optimize-deployment/migration-update/3.7-to-3.8",
                "self-managed/optimize-deployment/migration-update/3.6-to-3.7",
                "self-managed/optimize-deployment/migration-update/3.5-to-3.6",
                "self-managed/optimize-deployment/migration-update/3.4-to-3.5",
                "self-managed/optimize-deployment/migration-update/3.3-to-3.4",
                "self-managed/optimize-deployment/migration-update/3.2-to-3.3",
                "self-managed/optimize-deployment/migration-update/3.1-to-3.2",
                "self-managed/optimize-deployment/migration-update/3.0-to-3.1",
                "self-managed/optimize-deployment/migration-update/2.7-to-3.0",
                "self-managed/optimize-deployment/migration-update/2.6-to-2.7",
                "self-managed/optimize-deployment/migration-update/2.5-to-2.6",
                "self-managed/optimize-deployment/migration-update/2.4-to-2.5",
                "self-managed/optimize-deployment/migration-update/2.3-to-2.4",
                "self-managed/optimize-deployment/migration-update/2.2-to-2.3",
                "self-managed/optimize-deployment/migration-update/2.1-to-2.2",
              ],
            },

            {
              "Advanced features": [
                "self-managed/optimize-deployment/advanced-features/engine-data-deletion",
                "self-managed/optimize-deployment/advanced-features/import-guide",
              ],
            },
          ],
        },

        {
          Identity: [
            docsLink(
              "What is Identity?",
              "self-managed/identity/what-is-identity/"
            ),
            docsLink(
              "Installation and first steps",
              "self-managed/identity/getting-started/install-identity/"
            ),

            {
              "User guide": [
                {
                  Configuration: [
                    docsLink(
                      "Making Identity production ready",
                      "self-managed/identity/user-guide/configuration/making-identity-production-ready/"
                    ),
                    docsLink(
                      "Configuring an external identity provider",
                      "self-managed/identity/user-guide/configuration/configure-external-identity-provider/"
                    ),
                    docsLink(
                      "Configure logging",
                      "self-managed/identity/user-guide/configuration/configure-logging/"
                    ),
                    docsLink(
                      "Connect to an existing Keycloak instance",
                      "self-managed/identity/user-guide/configuration/connect-to-an-existing-keycloak/"
                    ),
                  ],
                },

                {
                  Roles: [
                    docsLink(
                      "Add and assign a role",
                      "self-managed/identity/user-guide/roles/add-assign-role/"
                    ),
                    docsLink(
                      "Add and assign a permission",
                      "self-managed/identity/user-guide/roles/add-assign-permission/"
                    ),
                  ],
                },

                {
                  Groups: [
                    docsLink(
                      "Create a group",
                      "self-managed/identity/user-guide/groups/create-group/"
                    ),
                    docsLink(
                      "Assign users and roles to a group",
                      "self-managed/identity/user-guide/groups/assign-users-roles-to-group/"
                    ),
                  ],
                },

                {
                  Authorizations: [
                    docsLink(
                      "Managing resource authorizations",
                      "self-managed/identity/user-guide/authorizations/managing-resource-authorizations/"
                    ),
                    docsLink(
                      "Managing user access",
                      "self-managed/identity/user-guide/authorizations/managing-user-access/"
                    ),
                    docsLink(
                      "Generating machine-to-machine (M2M) tokens",
                      "self-managed/identity/user-guide/authorizations/generating-m2m-tokens/"
                    ),
                  ],
                },

                {
                  Tenants: [
                    docsLink(
                      "Managing tenants",
                      "self-managed/identity/user-guide/tenants/managing-tenants/"
                    ),
                  ],
                },

                {
                  "Mapping rules": [
                    docsLink(
                      "Managing mapping rules",
                      "self-managed/identity/user-guide/mapping-rules/managing-mapping-rules/"
                    ),
                  ],
                },

                {
                  "Additional features": [
                    docsLink(
                      "Adding an API",
                      "self-managed/identity/user-guide/additional-features/adding-an-api/"
                    ),
                    docsLink(
                      "Incorporate applications",
                      "self-managed/identity/user-guide/additional-features/incorporate-applications/"
                    ),
                  ],
                },
              ],
            },

            {
              Deployment: [
                docsLink(
                  "Configuration variables",
                  "self-managed/identity/deployment/configuration-variables/"
                ),
                docsLink(
                  "Application monitoring",
                  "self-managed/identity/deployment/application-monitoring/"
                ),
                docsLink(
                  "Starting configuration",
                  "self-managed/identity/deployment/starting-configuration-for-identity/"
                ),
                docsLink(
                  "Resource management",
                  "self-managed/identity/deployment/resource-management/"
                ),
              ],
            },

            docsLink(
              "Troubleshoot Identity",
              "self-managed/identity/troubleshooting/troubleshoot-identity/"
            ),
          ],
        },

        {
          Modeler: [
            {
              "Web Modeler": [
                docsLink(
                  "Installation",
                  "self-managed/modeler/web-modeler/installation/"
                ),

                {
                  Configuration: [
                    docsLink(
                      "Overview",
                      "self-managed/modeler/web-modeler/configuration/"
                    ),
                    docsLink(
                      "Database",
                      "self-managed/modeler/web-modeler/configuration/database/"
                    ),
                    docsLink(
                      "Identity",
                      "self-managed/modeler/web-modeler/configuration/identity/"
                    ),
                    docsLink(
                      "Logging",
                      "self-managed/modeler/web-modeler/configuration/logging/"
                    ),
                    docsLink(
                      "SSL",
                      "self-managed/modeler/web-modeler/configuration/ssl/"
                    ),
                  ],
                },

                {
                  Troubleshooting: [
                    docsLink(
                      "Database connection",
                      "self-managed/modeler/web-modeler/troubleshooting/troubleshoot-database-connection/"
                    ),
                    docsLink(
                      "Zeebe connection",
                      "self-managed/modeler/web-modeler/troubleshooting/troubleshoot-zeebe-connection/"
                    ),
                    docsLink(
                      "Login issues",
                      "self-managed/modeler/web-modeler/troubleshooting/troubleshoot-login/"
                    ),
                  ],
                },
              ],
            },

            {
              "Desktop Modeler": [
                docsLink(
                  "Deploy diagram",
                  "self-managed/modeler/desktop-modeler/deploy-to-self-managed/"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
