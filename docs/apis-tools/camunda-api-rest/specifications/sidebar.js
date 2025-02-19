module.exports = [
  {
    type: "doc",
    id: "apis-tools/camunda-api-rest/specifications/camunda-8-rest-api",
  },
  {
    type: "category",
    label: "Cluster",
    items: [
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/get-cluster-topology",
        label: "Get cluster topology",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Job",
    items: [
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/activate-jobs",
        label: "Activate jobs",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/fail-job",
        label: "Fail job",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/report-error-for-job",
        label: "Report error for job",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/complete-job",
        label: "Complete job",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Incident",
    items: [
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/resolve-incident",
        label: "Resolve incident",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "User task",
    items: [
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/complete-user-task",
        label: "Complete user task",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/assign-user-task",
        label: "Assign user task",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/update-user-task",
        label: "Update user task",
        className: "api-method patch",
      },
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/unassign-user-task",
        label: "Unassign user task",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/query-user-tasks-experimental",
        label: "Query user tasks (experimental)",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Process Instance",
    items: [
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/query-process-instances-experimental",
        label: "Query process instances (experimental)",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Decision Definition",
    items: [
      {
        type: "doc",
        id: "apis-tools/camunda-api-rest/specifications/query-decision-definitions-experimental",
        label: "Query decision definitions (experimental)",
        className: "api-method post",
      },
    ],
  },
];
