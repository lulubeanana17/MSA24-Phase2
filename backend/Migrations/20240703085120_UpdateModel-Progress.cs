using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModelProgress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Action_ActionId",
                table: "Requests");

            migrationBuilder.DropTable(
                name: "Action");

            migrationBuilder.RenameColumn(
                name: "ActionId",
                table: "Requests",
                newName: "ProgressId");

            migrationBuilder.RenameIndex(
                name: "IX_Requests_ActionId",
                table: "Requests",
                newName: "IX_Requests_ProgressId");

            migrationBuilder.CreateTable(
                name: "Progress",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Progress", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Progress_ProgressId",
                table: "Requests",
                column: "ProgressId",
                principalTable: "Progress",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Progress_ProgressId",
                table: "Requests");

            migrationBuilder.DropTable(
                name: "Progress");

            migrationBuilder.RenameColumn(
                name: "ProgressId",
                table: "Requests",
                newName: "ActionId");

            migrationBuilder.RenameIndex(
                name: "IX_Requests_ProgressId",
                table: "Requests",
                newName: "IX_Requests_ActionId");

            migrationBuilder.CreateTable(
                name: "Action",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Action", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Action_ActionId",
                table: "Requests",
                column: "ActionId",
                principalTable: "Action",
                principalColumn: "Id");
        }
    }
}
